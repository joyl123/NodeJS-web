let MYSQL_CONFIG = {};
//为后期 开发环境和生产环境做好预留
MYSQL_CONFIG = {
  host: "localhost",
  user: "root",
  password: "zoe369963",
  port: 3306,
  database: "myblog",
};

module.exports = {
  MYSQL_CONFIG,
};
