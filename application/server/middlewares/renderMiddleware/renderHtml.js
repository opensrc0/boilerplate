/* eslint-disable max-len, import/no-unresolved */

export default (app, route, req) => `
  <!doctype html>
  <html lang="en">
    <head>
      <title>Title</title>
      <link rel="shortcut icon" href="https://assets1.cleartax-cdn.com/cleartax-brand/app-icons/2018/01/favicon_32x32.png">
    </head>
    <body>
      <div id="root">${app}</div>
    </body>
  </html>`;
