const db = require("../config/db");

db.run(`
  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    courseName TEXT NOT NULL,
    description TEXT,
    instructor TEXT NOT NULL
  )
`);

module.exports = db;
