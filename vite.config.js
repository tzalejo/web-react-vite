import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
export default defineConfig({
    // base: '/',
    // base: '/react-test', //para github page
    // "homepage": "https://tzalejo.github.io/react-test", para github page
    // "homepage": "https://bitcoinneuquen.com.ar", para el host
    // "deploy": "gh-pages -d build",
    // "gh-pages": "^6.1.1",
    plugins: [react()],
    server: {
        proxy: {
            '/bitstamp': {
                target: 'https://www.bitstamp.net',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/bitstamp/, '/api/v2'),
            },
            '/coinmarketcap': {
                target: 'https://pro-api.coinmarketcap.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/coinmarketcap/, ''),
            },
            '/binance': {
                target: 'https://api.binance.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/binance/, ''),
            },
        },
    },
});
