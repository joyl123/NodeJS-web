//处理博客相关的路由
const { SuccessModel } = require("../model/responseModel");
const { getList, getDetail,createNewBlog } = require("../controllers/blog");

const handleBlogRoute = (req, res) => {
  //定义处理路由的逻辑
  const method = req.method;
  //获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }
  //获取博客详情
  if (method === "GET" && req.path === "/api/blog/detail") {
    const id = req.query.id;
    const detailData = getDetail(id);
    return new SuccessModel(detailData);
  }
  //新建博客
  if (method === "POST" && req.path === "/api/blog/new") {
    const blogData=req.body;
    const newBlogData=createNewBlog(blogData)
    // return {
    //   message: "新建博客的接口",
    // };
    return new SuccessModel(newBlogData);
  }
  if (method === "POST" && req.path === "/api/blog/update") {
    console.log(req.body);
    return {
      message: "更新博客的接口",
    };
  }
  if (method === "POST" && req.path === "/api/blog/delete") {
    return {
      message: "删除博客的接口",
    };
  }
};
module.exports = handleBlogRoute;
