const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },

},
    {
        timestamps: true,
    }
)

// 'modelName', schemaObject
module.exports = mongoose.model('User', userSchema)