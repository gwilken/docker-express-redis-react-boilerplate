const redis = require('redis')
const log = require('../utils/log');

this.client = (process.env.NODE_ENV === 'production') ? redis.createClient(6379, 'redis') : redis.createClient(6379, 'localhost')

this.client.on('ready', () => {
  log('[ REDIS ] - Ready.')
})
