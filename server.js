const http = require('http');

const start = function() {
  const server = http.createServer(function(request, response) {
    console.log('Request Received...');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World...');
    response.end();
  });
  server.listen(8888);
  console.log('Server Started...');
}

module.exports = { start };



