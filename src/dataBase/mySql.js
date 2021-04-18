const mysql = require("mysql");
const { MYSQL_CONFIG } = require("../config/dataBase");

//创建链接对象
const connection = mysql.createConnection(MYSQL_CONFIG);
//开始链接
connection.connect();
// 执行aql 语句
// const sql = `update blogs set title='标题1' where content ='内容1'`;
// connection.query(sql, (err, result) => {
//   if (err) {
//     console.error("error", err);
//     return;
//   }
//   console.log("result", result);
// });

//执行sql
// function execSQL(sql, callback) {
//   connection.query(sql, callback);
// }
//执行aql
function execSQL(sql, callback) {
  const promise = new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
  return promise;
}
module.exports = {
  execSQL,
};
