const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{type: String, required :true, minlength:3, maxlength:50},
    email:{type: String, required :true, min:3, max:100},
    password:{type: String, required :true, min:6, max:200},
    admin: { type:Boolean, default: false},
    createdAt: {type:Date, default: Date.now}
})

module.exports = mongoose.model('User', userSchema)