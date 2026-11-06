# KJAR Eyewear storefront

The web storefront for KJAR, an independent eyewear brand. It's live at **[kjar.in](https://kjar.in)**. I led a three-person team that built and shipped it.

## Features

- Product catalog with category pages, product detail pages with image zoom, and a buying guide
- Cart with guest-cart migration on sign-in, checkout with saved addresses, and Razorpay payments
- Order history and a user profile
- Store locator map (Leaflet), a partner-with-us form, and a careers section
- SEO tags per page (react-helmet-async) and scroll animations

## Stack

React 18 · Vite · Redux Toolkit · React Router · MUI · Tailwind CSS · Axios · Razorpay · Leaflet

The frontend talks to the KJAR REST API (`src/config.js`). The API isn't part of this repository.

## Run locally

```bash
git clone https://github.com/vishalbharti08/kjar.in.git
cd kjar.in
npm install
npm run dev
```

To work against a local API, change `BASE_URL` in `src/config.js`.
