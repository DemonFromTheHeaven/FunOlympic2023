const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required!']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required!']
    },
    country: {
        type: String,
        //required: [true, 'Country is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: [true, 'Username must be unique!']
    },
    roles: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: [true, 'Email should be unique'],
        validate: [validator.isEmail, 'Email is not valid!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        validate: {
            validator: function (el) {
                return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+[\]{};':"\\|,.<>/?~`]).{8,}$/.test(el);
            },
            message: 'Password must contain 1 each character of number, uppercase, lowercase, symbol and at least 8 characters'
        }
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Password Confirm is required!'],

        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: 'Password does not match!',
        },

    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
        default: null
    },
    enabled: {
        type: Boolean,
        default: true
    }

});

userSchema.pre('save', async function (next) {
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, 10);
    this.passwordConfirm = this.password;
    // this.passwordConfirm = undefined;
    next();
});


const User = mongoose.model('User', userSchema);
module.exports = User; 