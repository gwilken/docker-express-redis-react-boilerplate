// routes/index.js

const router = require('express').Router()
const log = require('../utils/log')
const path = require('path')

//const { } = require('./middleware');

router.post('/ping', (req, res) => res.send('PONG'))
router.get('/ping', (req, res) => res.json('PONG'))

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

module.exports = router
