const http = require('http');
const url = require('url');

const start = function(route, handle) {
  const server = http.createServer(function(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received.`);
    route(handle, pathname);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World...');
    response.end();
  });
  server.listen(8888);
  console.log('Server Started...');
}

module.exports = { start };



