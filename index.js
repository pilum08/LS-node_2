const http = require('http');
const port = 3000;
const interval = process.env.interval || 1000;
const time = process.env.time || 5000;

http.createServer((req, res) => {
  if (req.method === 'GET') {
    const begining = Date.now();
    let stop = Date.now();
    const countdown = setInterval(() => {
      if ((stop - begining) > time) {
        res.write(`${new Date().toUTCString()}`);
        res.end();
        clearInterval(countdown);
      } else {
        stop = Date.now();
        console.log(`${new Date().toUTCString()}`);
      }
    }, interval);
  }
}).listen(port);
