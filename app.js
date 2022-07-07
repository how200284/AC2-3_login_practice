const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
const userList = require('./user.json').results

const app = express()
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`This app is working on http://localhost:${PORT}`)
})