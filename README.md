# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

# SHOP.

A responsive product storefront built with React and Vite. It includes featured products, a persistent shopping cart, a cart drawer, and add-to-cart feedback.

## Run locally

```bash
cd my-app
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## React concepts practiced

- Building reusable function components and composing a page from components.
- Passing data and event callbacks between components with props.
- Managing interactive UI with `useState` and event handlers.
- Running side effects and cleaning them up with `useEffect`.
- Using `useRef` to keep a timeout ID between renders.
- Rendering API data with `.map()`, stable keys, and conditional JSX.
- Fetching remote product data with Axios and handling request errors.
- Sharing cart state through events and updating the cart badge and drawer.
- Persisting and restoring cart data with browser `localStorage`.
- Creating accessible UI with semantic elements, labels, and live status messages.

## Scripts

- `npm run dev` starts the development server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint.
