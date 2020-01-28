const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const routes = require('../routes')
const handle = routes.getRequestHandler(nextApp);

nextApp.prepare().then(() => {
  const app = express();
  app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(handle);
    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`> Ready at http://localhost:${PORT}`)
    })
})