const route = (handle, pathname) => {
  console.log(`Preparing to rout to ${pathname}`);
  if (typeof handle[pathname] === 'function') {
    handle[pathname];
  } else {
    console.log(`No request handler found for ${pathname}`);
  }
}

module.exports = { route };