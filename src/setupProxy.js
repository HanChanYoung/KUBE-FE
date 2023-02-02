const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
	// KUBE BE
    app.use(
            '/api',
            createProxyMiddleware({
                target: 'http://210.109.63.98:10108',
                changeOrigin: true,
            }))

        // kakao API proxy
    app.use(
            '/remote',
            createProxyMiddleware({
                target: 'https://objectstorage.kr-central-1.kakaoi.io/v1/eb454a58725f4cf4ba059729077e409b/bella-test/kube-image/*',
                changeOrigin: true,
            }))
    }