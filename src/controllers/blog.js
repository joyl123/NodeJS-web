//博客相关的方法
const getList = (author, keyword) => {
  //因为我没有数据库
  //  所以返回一个假数据
  return [
    {
      id: 1,
      title: "zoe的标题1",
      content: "内容1",
      author: "zoe",
      //t通过浏览器 Date.now 获取的
      createAt: 1616305884315,
    },
    {
      id: 2,
      title: "zoe的标题2",
      content: "内容22",
      author: "zoe2",
      //t通过浏览器 Date.now 获取的
      createAt: 1616306011026,
    },
    {
      id: 3,
      title: "zoe的标题3",
      content: "内容333",
      author: "zoe2",
      //t通过浏览器 Date.now 获取的
      createAt: 1616306012006,
    },
  ];
};
const getDetail = (id) => {
  return {
    id: 1,
    title: "zoe的标题1",
    content: "内容1",
    author: "zoe",
    //t通过浏览器 Date.now 获取的
    createAt: 1616305884315,
  };
};
//创建新的博客
const createNewBlog = (blogData) => {
  console.log({ blogData });
  return {
    id: 1,
  };
};
//更新博客
const updateBlog = (id, blogData = {}) => {
  console.log("id", id);
  console.log("blogData", blogData);
  return true;
};
// 删除博客
const deleteBlog = (id) => {
  console.log("id", id);
  return true;
};
module.exports = {
  getList,
  getDetail,
  createNewBlog,
  updateBlog,
  deleteBlog,
};
