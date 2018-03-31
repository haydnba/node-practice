const http = require('http');
const url = require('url');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '8888';

const start = function(route, handle) {
  const server = http.createServer(function(request, response) {
    let postData = '';
    const pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received.`);
    request.setEncoding('utf8');
    request.addListener('data', (chunk) => {
      postData += chunk;
      console.log(`POST data received, chunk: ${chunk}`);
    });
    request.addListener('end', () => {
      route(handle, pathname, response, postData);
    });
  });
  server.listen(port);
  console.log(`Server started - listening on ${host}, port ${port}...`);
}

module.exports = { start };



