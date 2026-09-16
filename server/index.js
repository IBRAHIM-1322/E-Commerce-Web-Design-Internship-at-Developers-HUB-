import http from 'node:http'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDirectory = path.join(__dirname, 'data')
const productsFile = path.join(dataDirectory, 'products.json')
const subscribersFile = path.join(dataDirectory, 'subscribers.json')
const inquiriesFile = path.join(dataDirectory, 'inquiries.json')
const port = Number(process.env.PORT || 3001)

const seedProducts = [
  { id: 1, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.5, category: 'Electronics', brand: 'Samsung', rating: 7.5, orders: 154 },
  { id: 2, name: 'Smartphone with premium camera', price: 249.99, category: 'Electronics', brand: 'Apple', rating: 8.2, orders: 96 },
  { id: 3, name: 'Wireless headphones with microphone', price: 49.99, category: 'Electronics', brand: 'Huawei', rating: 7.8, orders: 208 },
  { id: 4, name: 'Cotton t-shirt with multiple colors', price: 19.99, category: 'Clothes', brand: 'Pocco', rating: 8.6, orders: 341 },
]

async function readCollection(file, fallback = []) {
  try {
    return JSON.parse(await readFile(file, 'utf8'))
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
    await writeFile(file, JSON.stringify(fallback, null, 2))
    return fallback
  }
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  })
  response.end(JSON.stringify(payload))
}

async function readBody(request) {
  let body = ''
  for await (const chunk of request) body += chunk
  return body ? JSON.parse(body) : {}
}

async function handleRequest(request, response) {
  if (request.method === 'OPTIONS') return sendJson(response, 204, {})

  const url = new URL(request.url, `http://localhost:${port}`)
  try {
    if (request.method === 'GET' && url.pathname === '/api/health') {
      return sendJson(response, 200, { status: 'ok', service: 'ecommerce-api' })
    }

    if (request.method === 'GET' && url.pathname === '/api/products') {
      const products = await readCollection(productsFile, seedProducts)
      const search = (url.searchParams.get('search') || '').toLowerCase()
      const category = url.searchParams.get('category')
      const filtered = products.filter((product) => {
        const matchesSearch = !search || product.name.toLowerCase().includes(search)
        const matchesCategory = !category || category === 'All category' || product.category === category
        return matchesSearch && matchesCategory
      })
      return sendJson(response, 200, { products: filtered })
    }

    if (request.method === 'POST' && url.pathname === '/api/newsletter') {
      const { email } = await readBody(request)
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return sendJson(response, 400, { message: 'A valid email address is required.' })
      }
      const subscribers = await readCollection(subscribersFile)
      if (!subscribers.some((subscriber) => subscriber.email === email)) {
        subscribers.push({ email, subscribedAt: new Date().toISOString() })
        await writeFile(subscribersFile, JSON.stringify(subscribers, null, 2))
      }
      return sendJson(response, 201, { message: 'Subscription successful.' })
    }

    if (request.method === 'POST' && url.pathname === '/api/inquiries') {
      const inquiry = await readBody(request)
      if (!inquiry.item?.trim()) return sendJson(response, 400, { message: 'Item is required.' })
      const inquiries = await readCollection(inquiriesFile)
      const savedInquiry = { id: Date.now(), ...inquiry, createdAt: new Date().toISOString() }
      inquiries.push(savedInquiry)
      await writeFile(inquiriesFile, JSON.stringify(inquiries, null, 2))
      return sendJson(response, 201, { message: 'Inquiry sent successfully.', inquiry: savedInquiry })
    }

    sendJson(response, 404, { message: 'Endpoint not found.' })
  } catch (error) {
    console.error(error)
    sendJson(response, 500, { message: 'The server could not complete the request.' })
  }
}

await mkdir(dataDirectory, { recursive: true })
if (!existsSync(productsFile)) await writeFile(productsFile, JSON.stringify(seedProducts, null, 2))

http.createServer(handleRequest).listen(port, () => {
  console.log(`E-commerce API listening on http://localhost:${port}`)
})
