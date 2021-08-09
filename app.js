const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const fs = require('fs');
const https = require("https");
const axios = require('axios');

app
  .use(express.static(path.join(__dirname)))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/', (req, res) => res.render('pages/index'));

