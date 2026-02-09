const express = require('express')
const path = require('path')
const app = express()
const eateryRouter = require('./routes/food.routes')

// middleware to parse JSON request body
// urlencoded is for parsing form data (like from HTML forms)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static file serving (for images, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')))

// middleware for food routes
app.use('/api/eatery', eateryRouter)

app.get('/', (req, res) => {
    res.send(path.join(__dirname, 'public', 'index.html'))
    console.log('Serving index.html')
})

module.exports = app