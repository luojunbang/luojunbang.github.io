const config = {}
const rawArgv = process.argv.slice(2)
const fs = require('fs')
const path = require('path')
console.log(rawArgv)
const [p] = rawArgv
const port = 10888
const publicPath = config.publicPath ?? ''
const buildPath = path.join(__dirname, p)

console.log(buildPath)

var connect = require('connect')
var serveStatic = require('serve-static')
const app = connect()

app.use(
  publicPath,
  serveStatic(buildPath, {
    index: ['index.html', '/'],
  }),
)
app.use(
  '/react',
  serveStatic(buildPath, {
    index: ['react.html', 'react.html'],
  }),
)
app.listen(port, function () {
  console.log(`> Preview at  http://localhost:${port}${publicPath}`)
})
