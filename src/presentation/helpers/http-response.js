const MissingParamError = require("./missing-param-error");
const ServerError = require("./server.error");

module.exports = class httpResponse {
  static badRequest(paramName) {
    return { statusCode: 400, body: new MissingParamError(paramName) };
  }
  static serverError(paramName) {
    return { statusCode: 500, body: new ServerError(paramName) };
  }
  static unauthorized() {
    return { statusCode: 401 };
  }
};
