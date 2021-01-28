const { Pool } = require('pg')

const pool = new Pool({
  port:5432,
  user:'postgres',
  host:'172.16.104.169',
  password: 'ssdOsdd2010_',
  database: 'postgres',
  max:10
});


pool.connect((err, db, done) => {
  if (err) {
    return console.log(err);
  }
  else {
  }
})
module.exports = {

  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}