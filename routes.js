const routes = require('next-routes')

module.exports = routes()
.add('/', 'Home')
.add('/hello', 'hello')