const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://login.nstu.ru',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Удалите префикс `/api`, когда перенаправляете
      },
    })
  );
};
