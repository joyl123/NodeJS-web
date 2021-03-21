class BaseModel {
  constructor(data, message) {
    //兼容性处理
    if (typeof data === "string") {
      this.message.data;
      data = null;
      message = null;
    }
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}
//成功
class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.error = 0;
  }
}
//失败
class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.error = -1;
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
};
