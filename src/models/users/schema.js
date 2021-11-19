const mongoose = require('mongoose');

const {Schema} = mongoose;

const UsserSchema = new Schema({
    name: {type: String , minlength:3, maxlength: 110},
    phone: {type: Number, unique: true , minlength:10, maxlength: 13},
    email: {type: String , unique: true, lowercase: true},
    password: {type: String, minlength: 8, maxlength:16},
    address: new Schema{
        name: String,
        address: String,
        zip: Number,
    },
    role: {type: String},
    orders: [String],
    restaurant:  {type : String}
    status: {type: Boolean},
});
module.exports = mongoose.model('User' , UsserSchema);