const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const userList = require('./user.json').results

const app = express()
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const { email, password } = req.body
  let accountIndex = userList.findIndex(user => user.email === email)
  let userPassword = Boolean(userList[accountIndex].password === password)
  const userName = userList[accountIndex].firstName

  if (accountIndex === -1) {
    return res.render('not_found')
  } else if (!userPassword) {
    return res.render('not_found')
  } else {
    return res.render('homepage', {userName})
  }
})

app.get('/homepage', (req, res) => {
  res.render('homepage')
})

app.get('/not_found', (req, res) => {
  res.render('not_found')
})

app.listen(PORT, () => {
  console.log(`This app is working on http://localhost:${PORT}`)
})