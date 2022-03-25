const express = require('express')
const router = express.Router()
const { getSugarReviews, getHotWords } = require('../controllers/dataController')

const { protect } = require('../middleware/authMiddleware')

// /api/data/
router.get('/sugarReviews', getSugarReviews)
router.get('/twitterData', getHotWords)

module.exports = router