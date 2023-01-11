const express = require('express')
const app = express()

// GET endpoint for fetching a name
app.get('/get_name', (req, res) => {
  res.send('Mahamud Hasan')
})

// POST endpoint for saving a user
app.post('/save_user', (req, res) => {
  // Get the user data from the request body