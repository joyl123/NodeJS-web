const fs = require("fs");
const path = require("path");

//读取文件内容
//promise 实现异步调用
function getFileContent(filename) {
  const promise = new Promise((resolve, reject) => {
    //数据文件的绝对路径
    const fullFileName = path.resolve(__dirname, "data", filename);
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data.toString()));
    });
  });
  return promise;
}
getFileContent("a.json")
  .then((aData) => {
    console.log("aData", aData);
    return getFileContent(aData.next);
  })
  .then((bData) => {
    console.log("bData", bData);
    return getFileContent(bData.next);
  })
  .then((cData) => {
    console.log("cData", cData);
  });
