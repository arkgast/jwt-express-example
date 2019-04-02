const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  })
})

app.get('/api/secret', verifyToken, (req, res) => {
  res.json({
    message: 'secret information'
  })
})

function verifyToken (req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization']

  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')

    // Get token from array
    const bearerToken = bearer[1]

    // Set the token
    req.token = bearerToken

    next()
  } else {
    // Forbindden
    res.sendStatus(403)
  }
}

app.listen(5000, () => {
  console.log('Server started on port 5000')
})
