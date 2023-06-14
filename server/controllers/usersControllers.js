const Register = require('../models/modelRegister');
const bcrypt = require('bcrypt');

const users = [];

module.exports.AddUser = async (req, res) => {

  let mail = req.body.mail;
  let name = req.body.name;
  let password = req.body.password1;
  let password2 = req.body.password2;

  const hashpassword = await bcrypt.hash(password, 10);

  // users.push(user);
  // console.log(users);

  const existingUser = await Register.findOne({
    mail: mail
  });
  if (password !== password2) {
    res.status(404)
  }

  if (existingUser) {
    return res.status(409).json({
      message: 'You already have an account'
    });
  }

  if (!name || !mail || !password || !password2) {
    return res.status(400).json({
      message: 'Missing fields'
    });
  }

  if (!existingUser && password == password2) {
    const newUser = new Register({
      name,
      mail,
      password1: hashpassword,
    });
    await newUser.save();
    res.status(201).json(newUser);
  }
};


module.exports.Login = async (req, res) => {
  // Extract email and password from the request body
  const { mail, password1: password } = req.body;

  try {
    // Search for a user in the database based on the email
    const user = await Register.findOne({ mail });

    if (!user) {
      // User not found in the database
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password stored in the user object
    const isPasswordCorrect = await bcrypt.compare(password, user.password1);

    if (!isPasswordCorrect) {
      // Incorrect password
      return res.status(401).json({ message: 'Wrong password, please try again' });
    }
    if(!mail || password){
      res.status(402)
    }

    // Password is correct, return the user details
    return res.status(200).json(user);
  } catch (error) {
    // Handle any unexpected errors
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
