const route = (handle, pathname, response, postData) => {
  console.log(`Preparing to route to ${pathname}`);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](response, postData);
  } else {
    console.log(`No request handler found for ${pathname}`);
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('404 Not Found');
    response.end();
  }
}

module.exports = { route };