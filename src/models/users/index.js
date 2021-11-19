const User = require('./schema');


exports.create = (body) => User.create(body);
exports.get = () => User.find();
exports.update = () => User.updateOne();
exports.deleteOne = () => User.deleteOne();



