const express = require('express');
const routes = require('./routes');
require('./redis')

const log = require('./utils/log');

const { setSecureHeaders } = require('./middleware');

const PORT = 3000;

const app = express();

app.use(setSecureHeaders);

app.use(express.static("./frontend/build"));
app.use('/', routes);

app.listen(PORT, function() {
  log('[ EXPRESS ] - REST Server up on port:', PORT);
})
