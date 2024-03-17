# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- [@framer-motion](https://www.framer.com/motion/) uses Frame Motion
    install: npm install framer-motion
- [@react-icons](https://www.npmjs.com/package/react-icons) uses react-icons
    npm install react-icons --save
- [@tailwindcss](https://tailwindcss.com/) uses tailwindcss
    run:
    npm install -D tailwindcss
    npx tailwindcss init

    Configure:
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
            extend: {},
        },
        plugins: [],
    }
    add in css:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    listoooo!


