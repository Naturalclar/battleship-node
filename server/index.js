/* eslint-disable no-console */
/* eslint-disable no-shadow */
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((request, response) => {
  console.log('request ', request.url);

  const dir = `${__dirname}/../client`;

  let filePath = `${dir}${request.url}`;
  if (filePath === `${dir}/`) {
    filePath = `${dir}/index.html`;
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  let contentType = 'text/html';
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
  };

  contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        fs.readFile('./404.html', (error, content) => {
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        });
      } else {
        response.writeHead(500);
        response.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
        response.end();
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
