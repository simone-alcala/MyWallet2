import connection from '../database.js';

async function createUser(name, email, password){
  return connection.query (
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, password]
  );
}

async function getUserByEmail(email){
  return connection.query (
    `SELECT * FROM "users" WHERE "email"=$1`, [email]
  );
}

const userRepository = {
  createUser,
  getUserByEmail
}

export default userRepository;