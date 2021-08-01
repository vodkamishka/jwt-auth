const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unigue: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean,defaulted: false},
    activationLink: {type: String}
})

module.exports = model('User', UserSchema);