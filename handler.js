
const exec = require('child_process').exec;

const start = (response) => {
  console.log(`Start handler called.`);
  exec('ls -lah', function(error, stdout, stderr) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(stdout);
    response.end();
  });
}

const upload = (response) => {
  console.log(`Upload handler called.`);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello Upload!');
  response.end();
}

module.exports = { start, upload };

