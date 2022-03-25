const asyncHandler = require('express-async-handler')

// Bring in the model
const { SugarData, HotWords } = require('../models/dataModel')

// @desc    Get sugarReviews
// @route   api/data/sugarReviews
// @access  private
const getSugarReviews = asyncHandler(async (req, res) => {
    const sugarReviews = await SugarData.find({})
    
    res.status(200).json(sugarReviews)
})

// @desc    Get sugarReviews
// @route   api/data/sugarReviews
// @access  private
const getHotWords = asyncHandler(async (req, res) => {
    const hotWords = await HotWords.find({})
    
    res.status(200).json(hotWords)
})

module.exports = {
    getSugarReviews,
    getHotWords,
}