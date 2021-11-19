const User = require('./schema');


exports.create = () => User.create();
exports.get = () => User.find();
exports.update = () => User.updateOne();
exports.delete = () => User.deleteOne();



