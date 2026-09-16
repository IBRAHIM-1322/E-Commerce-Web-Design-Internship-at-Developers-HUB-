# E-commerce storefront

Responsive React storefront with a lightweight Node API for products, newsletter subscriptions, and product inquiries.

## Run locally

Install dependencies and start the frontend:

```bash
npm install
npm run dev
```

Start the API in a second terminal:

```bash
npm run server
```

The API listens on `http://localhost:3001`. Vite proxies `/api` requests to it during development. Data is persisted in `server/data` and is ignored by git.

Available endpoints:

- `GET /api/health`
- `GET /api/products?search=&category=`
- `POST /api/newsletter`
- `POST /api/inquiries`

The storefront is responsive at tablet and mobile breakpoints, including the header, product grids, listings, details, cart, and footer.
