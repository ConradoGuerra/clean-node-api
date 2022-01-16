const httpResponse = require("../helpers/http-response");

module.exports = class userRouter {
    route(httpRequest) {
      if (!httpRequest || !httpRequest.body) {
        return httpResponse.serverError();
      }
      const { name, gender, city, birthday, age } = httpRequest.body;
      if (!name) {
        return httpResponse.badRequest("name");
      } else if (!gender) {
        return httpResponse.badRequest("gender");
      } else if (!city) {
        return httpResponse.badRequest("city");
      } else if (!birthday) {
        return httpResponse.badRequest("birthday");
      } else if (!age) {
        return httpResponse.badRequest("age");
      }
    }
  }
  