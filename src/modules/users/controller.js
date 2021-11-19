// exports.getUser = (req, res) => {
//   res.send("I am the user");
// };

// exports.deleteUser = () => { };
const { create,deleteOne,get,update } = require('../../models/users/index');

exports.create = (req,res) => {
  const newUser = await User.create(req,body).catch(error => {
    return res.status(409).send({
      success: false,
      message : "unable to save user",
    })
  });
  res.statu(200).send({
    success:true,
    data: newUser,
    message: "Successfully saved the user",
  })
};