const mongoose = require('mongoose');
const uuid = require('uuid');

const comicSchema = new mongoose.Schema({
    comicId: {
        type: String,
        unique: true,
        default: uuid.v4
    },
    title: {
        type: String,
        required: true,
        minlength: [3, 'Title must be at least 3 characters']
    },
    coverImage: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller', 'Sci-Fi'],
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Description must be at least 10 characters']
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comicImages: {
        type: [String],
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
    ratings: {
        type: [Number],
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
});

comicModel = mongoose.model('Comic', comicSchema);

module.exports = comicModel;
