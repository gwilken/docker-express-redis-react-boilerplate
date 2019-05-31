// routes/index.js
const router = require('express').Router()
const { Client } = require('@elastic/elasticsearch')
const elastic = new Client({ node: 'http://localhost:9200' })

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

router.get('/wreck/:query', (req, res) => {
  const { query } = req.params
  
  elastic.search({
    index: 'wrecks',
    q: query
  }).then(function(resp) {
      console.log('HITS:', resp.body.hits.total);
      console.log(resp.body.hits.hits)

      res.json(resp.body.hits.hits)

  }, function(err) {
      console.trace(err.message);
      res.sendStatus(500)
  });
  
})


router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

module.exports = router
