const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'Username must be at least 3 characters']
    },
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'Firstname must be at least 3 characters']
        },
        lastname: {
            type: String,
            required: true,
            minlength: [3, 'Lastname must be at least 3 characters']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, 'Email must be at least 6 characters']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters']
    },

    bio : {
        type: String,
        required: false,
        minlength: [10, 'Bio must be at least 10 characters']
    },
    profilePicture: {
        type: String,
        required: false
    },
    totalLikes: {
        type: Number,
        default: 0
    },
    totalComics: {
        type: Number,
        default: 0
    },
    avarageRating: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

// jwt token
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, role: this.role }, process.env.JWT_SECRET);
    return token;
}

// hash password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// compare password
userSchema.methods.comparePassword = async function(plainPassword) {
    return await bcrypt.compare(plainPassword, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;

