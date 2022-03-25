const mongoose = require('mongoose')

const sugar = mongoose.Schema({
    _id: {type:Number},
    itemid: { type: Number },
    comment: { type: String },
    productName: { type: String },
    length: { type: Number },
    commentList: { type: String },
    lemmatizedComments: { type: Array },
    cluster0: { type: Number },
    cluster1: { type: Number },
    cluster2: { type: Number },
},
    { collection: "sugarReviews" }
)

const hotWords = mongoose.Schema({
    _id: { type: Number },
    word: { type: String },
    counts: { type: Number },
},
    { collection: "hotWords" }
)

// Set variable for export 
// 'ModelName', schemaObjec
const sugarSchema = mongoose.model('SugarData', sugar)
const hotWordsSchema = mongoose.model('HotWords', hotWords)

// Export the model
module.exports = { SugarData : sugarSchema, HotWords: hotWordsSchema }