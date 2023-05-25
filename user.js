const express = require('express')

const router = express.Router()

router.post('/register', (request, response) => {
  //  code here to register a new user

  response.send('success')
})

module.exports = router
