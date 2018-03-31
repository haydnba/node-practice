
const qs = require('querystring');

const start = (response, postData) => {
  console.log(`Start handler called.`);
  let body = `
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
      </head>
      <body>
        <form action="/upload" method="POST">
          <textarea name="text" rows="20" cols="60"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </body>
    </html>`;
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
}

const upload = (response, postData) => {
  console.log(`Upload handler called.`);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(`Post data uploaded: ${qs.parse(postData).text}`);
  response.end();
}

module.exports = { start, upload };

