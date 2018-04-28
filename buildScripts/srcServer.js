import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev.js'

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.get('/users', function(req, res) {
  //hard coding users
  res.json([
    {"id": 1, "firstName": "Cool", "lastName": "Man", "email": "cool.man@mail.co"},
    {"id": 3, "firstName": "Cooler", "lastName": "Man", "email": "cooler.man@mail.co"},
    {"id": 3, "firstName": "Coolest", "lastName": "Man", "email": "coolest.man@mail.co"},
  ])
})

app.listen(port, function(err) {
  if(err) {
    console.log('err')
  } else {
    open('http://localhost:'+port)
  }
})
