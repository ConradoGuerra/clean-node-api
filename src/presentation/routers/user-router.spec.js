const MissingParamError = require("../helpers/missing-param-error");
const ServerError = require("../helpers/server.error");
const userRouter = require("./user-router");

describe("User Router", () => {
  it("Should return statusCode 400 and message if no name is provided", () => {
    const sut = new userRouter();
    const httpRequest = {
      body: {
        gender: "any_gender",
        city: "any_city",
        birthday: "any_birthday",
        age: "any_age",
      },
    };
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
  });

  it("Should return statusCode 400 and message if no gender is provided", () => {
    const sut = new userRouter();
    const httpRequest = {
      body: {
        name: "any_name",
        city: "any_city",
        birthday: "any_birthday",
        age: "any_age",
      },
    };
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("gender"));
  });

  it("Should return statusCode 400 and message if no city is provided", () => {
    const sut = new userRouter();
    const httpRequest = {
      body: {
        name: "any_name",
        gender: "any_gender",
        birthday: "any_birthday",
        age: "any_age",
      },
    };
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("city"));
  });

  it("Should return statusCode 400 and message if no birthday is provided", () => {
    const sut = new userRouter();
    const httpRequest = {
      body: {
        name: "any_name",
        gender: "any_gender",
        city: "any_city",
        age: "any_age",
      },
    };
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("birthday"));
  });

  it("Should return statusCode 400 and message if no age is provided", () => {
    const sut = new userRouter();
    const httpRequest = {
      body: {
        name: "any_name",
        gender: "any_gender",
        city: "any_city",
        birthday: "any_birthday",
      },
    };
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("age"));
  });

  it("Should return statusCode 500 if no httpRequest is provided", () => {
    const sut = new userRouter();
    const httpResponse = sut.route();
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError(""));
  });

  it("Should return statusCode 500 if httpRequest has no body", () => {
    const sut = new userRouter();
    const httpResponse = sut.route({});
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body).toEqual(new ServerError(""));
  });

  it("Should return statusCode 401 when invalid credential are sent", () => {
    const sut = new userRouter();
    const httpRequest = {
      body: {
        name: "invalid_name",
        gender: "invalid_gender",
        city: "invalid_city",
        birthday: "invalid_birthday",
        age: "invalid_age",
      },
    };
    
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).toBe(401);
  });
});
