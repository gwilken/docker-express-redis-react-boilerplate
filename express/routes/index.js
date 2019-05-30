// routes/index.js

const router = require('express').Router()
const log = require('../utils/log')
const path = require('path')

//const { } = require('./middleware');

router.post('/ping', (req, res) => {
  log('[ EXPRESS ] - ping on post /ping')
  res.send('PONG')
})

router.get('/ping', (req, res) => {
  log('[ EXPRESS ] - ping on get /ping')
  res.send('PONG')
})

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

module.exports = router
