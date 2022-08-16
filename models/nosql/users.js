const mongoose = require('mongoose');

const UserScheme = mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        roles: {
            type: ['user', 'admin'],
            default: 'user'
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("users", UserScheme);