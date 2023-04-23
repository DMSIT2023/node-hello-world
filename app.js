'use strict';

const express = require('express')
const app = express();

const port = 8080;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  const html = `
    <div>
      <h1>Hello World from Colombia AWS!</h1>
      <img src="https://mauricioserranoit.com.co/wp-content/uploads/2022/01/LANDING-PAGE-1-1.webp" alt="Example Image">
    </div>
  `;
  res.send(html);
});

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
