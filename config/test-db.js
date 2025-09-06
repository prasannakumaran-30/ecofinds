const pool = require('./db');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ DB connection error:', err);
  } else {
    console.log('✅ Connected to DB at:', res.rows[0].now);
  }
  pool.end();
});
