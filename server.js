const http = require('http');
const url = require('url');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '8888';

const start = function(route, handle) {
  const server = http.createServer(function(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received.`);
    route(handle, pathname, response);
  });
  server.listen(port);
  console.log(`Server started - listening on ${host}, port ${port}...`);
}

module.exports = { start };



