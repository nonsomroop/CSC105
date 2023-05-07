const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const app = express();
const port = 3000;
const salt = 10;

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_17ottx",
  password: "dYXfBZm3BrO8YqZE",
  database: "lab_blank01_173eema",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database.");
});

app.use(bodyParser.json({ type: "application/json" }));

validPassword = (password) => {
  const validLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  return validLength && hasLowerCase && hasUpperCase && hasNumber;
};

app.get("/", (req, res) => res.json("Hello world!"));

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!validPassword(password)) {
    return res.json({
      success: false,
      msg: "Password not valid",
    });
  } else {
    const hash = await bcrypt.hash(password, salt);

    var sql = mysql.format(
      "INSERT INTO users (username, hashcode) VALUES (?, ?)",
      [username, hash]
    );
    connection.query(sql, (err, rows) => {
      if (err) {
        console.error(err);
        res.json({
          success: false,
          msg: "Error",
        });
      } else {
        console.log(rows);
        if (rows) {
          res.json({
            success: true,
            msg: "Run successfully",
          });
        }
      }
    });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var sql = mysql.format("SELECT * FROM users WHERE username = ?", [username]);

  connection.query(sql, async (err, rows) => {
    if (err) {
      console.error(err);
      res.json({
        success: false,
        msg: "Error",
      });
    } else {
      if (rows.length == 0) {
        res.json({
          success: false,
          msg: "Error",
        });
		return;
      }
	  const isMatch = await bcrypt.compare(password, rows[0].hashcode);
	  if (!isMatch){
		res.json({
            success: false,
            msg: "the password is incorrect",
          });
	  } else {
		res.json({
			success: true,
			msg: "Login successfully",
		})
	  }
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
