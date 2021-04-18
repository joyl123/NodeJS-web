//抽离服务器业务代码 导出后做http.createServer的回调函数
const handleBlogRoute = require("./src/routes/blog");
const querystring = require("querystring");

//处理POST数据
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    // 非post 返回空对象
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    // 非json 返回空对象
    if (req.headers["content-type"] !== "application/json") {
      resolve({});
      return;
    }
    let postData = "";
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
  return promise;
};

const serverHandler = (req, res) => {
  //设置响应格式
  res.setHeader("Content-Type", "application/json");

  //获取path
  const url = req.url;
  req.path = url.split("?")[0];

  //解析query
  //例如 /api/blog/list?author=lintingting req.query=author=lintingting
  req.query = querystring.parse(url.split("?")[1]);
  getPostData(req).then((postData) => {
    req.body = postData;
    //博客相关的路由
    const blogData = handleBlogRoute(req, res);
    if (blogData) {
      blogData.then((blogData) => {
        res.end(JSON.stringify(blogData));
      });
      return;
    }
    //如果请求了 不存在的接口
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
  });
};
module.exports = serverHandler;
