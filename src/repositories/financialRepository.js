import connection from '../database.js';

async function createFinancialEvent(userId, value, type){
  return connection.query (
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
     [userId, value, type]
  );
}

async function getFinancialEventByUser(userId){
  return connection.query (
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [userId]
  );
}

const financialRepository = {
  createFinancialEvent,
  getFinancialEventByUser
}

export default financialRepository;