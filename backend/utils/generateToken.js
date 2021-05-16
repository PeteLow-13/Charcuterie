import jwt from 'jsonwebtoken';
// use jwt to get user token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '100d',
  });
};

export default generateToken;
