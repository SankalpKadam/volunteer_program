
import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();
const con_object = mysql.createConnection({
    host: process.env.DB_Host,
    user: process.env.DB_User,
    password: "",
    database: process.env.DB_Database,
  //   port: 80
  });

  const con = ()=>con_object.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE chat (chatid INT NOT NULL, text VARCHAR(255), senderid INT, userid INT, timestamp DATETIME, PRIMARY KEY (chatid))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

export default con;


