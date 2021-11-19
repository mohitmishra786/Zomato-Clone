const User = require('./schema');

exports.get = () => User.find();

exports.create = () => User.create();

exports.update = () => User.updateOne();

exports.delete = () => User.deleteOne();