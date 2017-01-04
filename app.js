const env = process.env;
const express = require('express')
const app = express()

app.use(express.static('blog/public'))

app.get('/health', (req, res) => {
  res.writeHead(200);
  res.end();
});

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', () => {
  console.log(`Application worker ${process.pid} started...`);
});
