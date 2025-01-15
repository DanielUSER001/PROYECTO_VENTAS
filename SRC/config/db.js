const { Pool } = require("pg");
const dotvenv = require("dotenv");
dotvenv.config();
const fs = require("fs");
const Client = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("SRC/certs/ca.crt").toString(),
  },
});

module.exports= Client