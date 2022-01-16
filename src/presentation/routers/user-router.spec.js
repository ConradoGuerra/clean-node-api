class userRouter {
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

class httpResponse {
  static badRequest(paramName) {
    return { statusCode: 400, body: new MissingParamError(paramName) };
  }
  static serverError() {
    return { statusCode: 500 };
  }
}

class MissingParamError extends Error {
  constructor(paramName) {
    super(`Missing param: ${paramName}`);
    this.name = "MissingParamError";
  }
}

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
  });

  it("Should return statusCode 500 if httpRequest has no body", () => {
    const sut = new userRouter();
    const httpResponse = sut.route({});
    expect(httpResponse.statusCode).toBe(500);
  });
});
