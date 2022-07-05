import userRepository from './../repositories/userRepository.js'
import userService from './../services/userServices.js'

export async function signup(req, res) {
  const { name, email, password } = req.body;
  await userService.signup(name, email, password);
  res.sendStatus(201);
}

export async function signin(req, res) { 
  const { email, password } = req.body;
  const token = signin( email, password );
  res.send({ token, });
}