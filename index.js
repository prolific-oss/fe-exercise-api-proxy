const http = require('http')
const httpProxy = require('http-proxy')

const target ='https://www.prolific.co/api/v1/study-cost-calculator/'
const proxy = httpProxy.createProxyServer({
  autoRewrite: true,
  target,
  secure: false,
  followRedirects: true,
  changeOrigin: true
})

proxy.on('proxyReq', (proxyReq, req, _res, _options) => {
  proxyReq.setHeader('Referer', 'https://app.prolific.co')
})

proxy.on('proxyRes', function(proxyRes, req, res) {
  proxyRes.headers['Access-Control-Allow-Origin'] = '*'
  proxyRes.headers['Access-Control-Allow-Headers'] =
    'x-pid, x-requested-with, x-confirmation-request, content-type, accept, origin, authorization'
  proxyRes.headers['Access-Control-Allow-Methods'] =
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  proxyRes.headers['Access-Control-Max-Age'] = 86400
})

const server = http.createServer((req, res) => {
  proxy.web(req, res)
})

console.log(`Listening on port 3001, proxying requests to ${target}`)
server.listen(3001)
