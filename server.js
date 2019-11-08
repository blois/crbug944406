import * as http from 'http';
import fs from 'fs';

const fsp = fs.promises;

export function createServer(port) {
  http.createServer(async (request, response) => {
    console.log(request.url);

    if (request.url == '/') {
      const file = await fsp.readFile('html/index.html', 'binary');
      const header = {
        'content-type': 'text/html',
      };
      response.writeHead(200, header);
      response.write(file, 'binary');
      response.end();
    } else if (request.url == '/iframe.html') {
      const file = await fsp.readFile('html/iframe.html', 'binary');
      const header = {
        'content-type': 'text/html',
      };
      response.writeHead(200, header);
      response.write(file, 'binary');
      response.end();
    }
  }).listen(port, '0.0.0.0');
}

