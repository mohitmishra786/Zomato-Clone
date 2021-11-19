const mongoose = require('mongoose');

const {Schema} = mongoose;

const UsserSchema = new Schema({
    name: {type: String , required: true},
    phone: {type: Number, unique: true , minlength:10, maxlength: 13,required: true},
    email: {type: String , unique: true, lowercase: true,required: true},
    password: {type: String, minlength: 8, maxlength:16,required: true},
    address: new Schema({
        name: String,
        address: String,
        zip: Number,
    }),
    role: {type: String,required: true},
    orders: [String],
    restaurant:  {type : String},
    status: {type: Boolean,default: true,required: true},
});
module.exports = mongoose.model('User' , UsserSchema);