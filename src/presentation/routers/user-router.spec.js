class userRouter {
  route(httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return {
        statusCode: 500,
      };
    }
    const { name, gender, city, birthday, age } = httpRequest.body;
    if (!name || !gender || !city || !birthday || !age) {
      return { statusCode: 400 };
    }
  }
}

describe("User Router", () => {
  it("Should return statusCode 400 if no name is provided", () => {
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
  });

  it("Should return statusCode 400 if no gender is provided", () => {
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
  });

  it("Should return statusCode 400 if no city is provided", () => {
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
  });

  it("Should return statusCode 400 if no birthday is provided", () => {
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
  });

  it("Should return statusCode 400 if no age is provided", () => {
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
