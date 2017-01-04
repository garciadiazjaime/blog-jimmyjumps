const express = require('express');
const app = express();
const port = process.env.OPENSHIFT_NODEJS_PORT || 4000;
const host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


app.use(express.static('blog/public'))

app.get('/health', (req, res) => {
  res.writeHead(200);
  res.end();
});

app.listen(port, host, () => {
  console.log('Server listening on http://%s:%s', host, port);
});
