const { User } = require("../model");  

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.post_signup = async (req, res) => {
  let data = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  };
  console.log(data);

  await User.create(data);
  res.send(true);
};

exports.signin = (req, res) => {
  res.render("signin");
};
exports.post_signin = async (req, res) => {
  let data = {
    id: req.body.id,
    pw: req.body.pw,
  };
  const result = await User.findAll(data);
  if (result.length > 0) res.send(true);
  else res.send(false);
};

// exports.profile = (req,res) => {
//     res.render("profile");
// }
// exports.profile = async (req,res) => {
//     const result = await User.findOne({
//         where : { id : req.body.id }
//     });
//     if ( result.length > 0 ) res.render("profile", {data: result[0]});
//     else res.redirect("/user/signin");
// }
exports.profile = async (req, res) => {
  let data = { id: req.body.id };
  let result = await User.findAll({ where: data });
  if (result.length > 0) res.render("profile", { data: result[0] });
  else res.redirect("/user/signin");
};

exports.profile_edit = async (req, res) => {
  let data = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  };

  await User.update(data, {
    where: { id: req.body.id },
  });
  res.send(true);
};

exports.profile_delete = async (req, res) => {
  await User.destroy({
    where: { id: req.body.id },
  });
  res.send(true);
};
