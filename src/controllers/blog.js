//博客相关的方法
const { execSQL } = require("../dataBase/mySql");

const getList = (author, keyword) => {
  //where 后面1=1 参数 容错处理
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += ` and title like '%${keyword}%' `;
  }
  return execSQL(sql);
};
const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`;
  return execSQL(sql).then((rows) => {
    // console.log('rows',rows)
    return rows[0];
  });
};
//创建新的博客
const createNewBlog = (blogData = {}) => {
  const title = blogData.title;
  const content = blogData.content;
  const author = blogData.author;
  const createAt = Date.now();
  const sql = `insert into blogs (title,content,author,createAt) values ('${title}','${content}','${author}','${createAt}')`;
  return execSQL(sql).then((insertResult) => {
    // insertResult 返回的是一个对象,对应的insertId 返回我们的id
    return {
      id: insertResult.insertId,
    };
  });
};
//更新博客
const updateBlog = (id, blogData = {}) => {
  const title = blogData.title;
  const content = blogData.content;
  const sql = `update blogs set title='${title}', content='${content}' where id=${id}`;
  return execSQL(sql).then((updateResult) => {
    console.log({ updateResult });
    // 此属性大于0 则更新成功为1
    if (updateResult.affectedRows > 0) {
      return true;
    }
    return false;
  });
};
// 删除博客
const deleteBlog = (id,author) => {
  const sql =`delete from blogs where id=${id} and author='${author}'`
  return execSQL(sql).then((deleteResult) => {
    console.log({deleteResult})
    if (deleteResult.affectedRows > 0) {
      return true;
    }
    return false;
  });
};
module.exports = {
  getList,
  getDetail,
  createNewBlog,
  updateBlog,
  deleteBlog,
};
