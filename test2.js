const isStream = require('./utils')
const fs = require('fs')
console.log(isStream.isDuplex(fs.createReadStream('./node.js')))
console.log(isStream.isWritable(fs.createReadStream('./node.js')))
console.log(isStream.isReadable(fs.createReadStream('./node.js')))