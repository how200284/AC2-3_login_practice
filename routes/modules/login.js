const express = require('express')
const router = express.Router()
const userList = require('../../user.json').results


router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  let accountIndex = userList.findIndex(user => user.email === email)

  if (accountIndex === -1) {
    return res.render('not_found')
  }
  else if (userList[accountIndex].password === password) {
    const userName = userList[accountIndex].firstName
    return res.render('homepage', { userName })
  }
  else {
    return res.render('not_found')
  }
})

module.exports = router