const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const buildDir = path.join(__dirname, 'build');

app.disable('x-powered-by');

app.use(express.static(buildDir, {
  maxAge: '1d',
  etag: true,
  lastModified: true,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Website server running on port ${port}`);
});
