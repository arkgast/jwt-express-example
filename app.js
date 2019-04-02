const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

const SECRET_KEY = 'secret-key'

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  })
})

app.get('/api/secret', verifyToken, (req, res) => {
  jwt.verify(req.token, SECRET_KEY, (err, data) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        message: 'secret information',
        data
      })
    }
  })
})

app.get('/api/login', (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: 'Ana',
    email: 'ana@gmail.com'
  }

  jwt.sign(
    { user },
    SECRET_KEY,
    {
      expiresIn: '30s'
    },
    (err, token) => {
      if (err) {
        console.log(err)
      }
      res.json({ token })
    }
  )
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
