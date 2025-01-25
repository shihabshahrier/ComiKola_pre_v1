const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
        minlength: [3, 'Comment must be at least 3 characters']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comic',
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', commentSchema);
