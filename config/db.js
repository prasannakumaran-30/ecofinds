const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',        // your PostgreSQL username
  host: 'localhost',
  database: 'ecofinds',    // your database name
  password: 'prasanna@30',    // your PostgreSQL password
  port: 5432,
});

module.exports = pool;


