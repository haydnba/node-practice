const server = require('./server');
const router = require('./router');
const routes = require('./handler');

const handle = {
  '/': routes.start,
  '/start': routes.start,
  '/upload': routes.upload
}

server.start(router.route, handle);