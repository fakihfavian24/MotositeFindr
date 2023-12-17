const User = require('../models/user');
const bcrypt = require('bcrypt');
const {generateLogToken} = require('../utils/generateLogToken')

module.exports.register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with the given email already exists' });
    }
    const newUser = await new User({
      fullname: req.body.fullname,
      email: req.body.email,
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
    }).save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error registering user' });
  }
};

module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

      if (isPasswordCorrect) {
        res.send({
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
          token: generateLogToken(user),
        });
      } else {
        res.status(401).send({ message: 'Password salah' });
      }
    } else {
      res.status(404).send({ message: 'Email tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Terjadi kesalahan server' });
  }
};

module.exports.registerForm = async (req, res) => {
    res.status(200).json({ message: 'Render registration form' });
}

module.exports.loginForm = (req, res) => {
    res.status(200).json({ message: 'Render login form' });
}

module.exports.logout = (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.flash('success_msg', 'Anda berhasil logout');
        res.status(200).json({ success: true, message: 'Logout berhasil' });
})}


