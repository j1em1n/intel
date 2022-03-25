// Bring in express
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000
const cors = require('cors')
const path = require('path')

// Connect to database
connectDB()

// initialize
const app = express()

// Middleware to send raw json
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/data', require('./routes/dataRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))
} else {
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'Welcome to Intellance v2' })
    })
}

app.use(errorHandler)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))