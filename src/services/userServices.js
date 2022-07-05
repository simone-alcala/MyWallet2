import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userRepository from './../repositories/userRepository.js'

async function signup(name, email, password) {
  if (!name || !email || !password) throw { type: 'unprocessable_entity' };
  const existingUsers = await userRepository.getUserByEmail(email);
  if (existingUsers.rowCount > 0) throw { type: 'conflict' };
  const hashedPassword = bcrypt.hashSync(password, 12);
  return userRepository.createUser(name, email, hashedPassword);
}

async function signin(email, password) {
  if (!email || !password) throw { type: 'unprocessable_entity' };
  const { rows } =  await userRepository.getUserByEmail(email);
  const [user] = rows;
  if (!user || !bcrypt.compareSync(password, user.password)) throw { type: 'unauthorized' };
  return jwt.sign( { id: user.id, }, process.env.JWT_SECRET );
}

const userService = {
  signup,
  signin
}

export default userService;