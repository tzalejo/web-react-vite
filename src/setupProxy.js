const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.bitstamp.net',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api/v2', // rewrite path
            },
        }),
    );
};
