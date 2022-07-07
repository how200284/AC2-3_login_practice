const express = require('express')
const exphbs = require('express-handlebars')

const userList = require('./user.json')

const app = express()
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/homepage', (req, res) => {
  res.render('homepage')
})

app.listen(PORT, () => {
  console.log(`This app is working on http://localhost:${PORT}`)
})