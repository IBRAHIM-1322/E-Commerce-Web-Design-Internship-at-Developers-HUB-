async function request(path, options = {}) {
  const response = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  const payload = await response.json()
  if (!response.ok) throw new Error(payload.message || 'Request failed.')
  return payload
}

export const api = {
  getProducts: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return request(`/api/products${query ? `?${query}` : ''}`)
  },
  subscribe: (email) => request('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email }),
  }),
  sendInquiry: (inquiry) => request('/api/inquiries', {
    method: 'POST',
    body: JSON.stringify(inquiry),
  }),
}
