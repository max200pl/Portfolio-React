const mongoose = require('mongoose');

const commonUserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatarUrl: {
        type: String
    },
});

const userSchema = new mongoose.Schema({
    ...commonUserSchema.obj,
    password: {
        type: String,
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    githubId: {
        type: String,
        unique: true,
        sparse: true
    },
});

const User = mongoose.model('Users', userSchema);

module.exports = User
