import express from 'express'
import path from 'path'
import open from 'open'
import compression from 'compression'

const port = 3000
const app = express()

app.use(compression())
app.use(express.static('dist'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
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
