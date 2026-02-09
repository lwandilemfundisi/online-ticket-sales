// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createServer } = require('http');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const next = require('next');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
const app = next({ dev: false });
const handle = app.getRequestHandler();
const httpsOptions = {
  key: fs.readFileSync('C:\\certs\\online-ticket-certs\\key.pem'),
  cert: fs.readFileSync('C:\\certs\\online-ticket-certs\\cert.pem'),
};
const port = 3002;
app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://localhost:${port}`);
  });
});
