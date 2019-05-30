const redis = require('redis')
const log = require('../utils/log');

this.client = redis.createClient(6379, 'redis')

this.client.on('ready', () => {
  log('[ REDIS ] - Ready.')
})
