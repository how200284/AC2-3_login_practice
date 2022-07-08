const express = require('express')
const router = express.Router()
const userList = require('../../user.json').results

router.get('/', (req, res) => {
  const userIndex = userList.findIndex(user => user.userID === req.cookies.userID)
  
  if (userIndex !== -1) {
    const firstName = userList[userIndex].firstName
    return res.render('homepage', { firstName })
  }
  else {
    return res.render('login')
  }
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  let accountIndex = userList.findIndex(user => user.email === email)

  if (accountIndex === -1) {
    return res.render('not_found')
  }
  else if (userList[accountIndex].password === password) {
    const { firstName, userID } = userList[accountIndex]
    res.cookie('userID', userID, { maxAge: 1000 * 60 })
    return res.render('homepage', { firstName })
  }
  else {
    return res.render('not_found')
  }
})

module.exports = router