class userRouter {
  route(httpResponse) {
    if (!httpResponse.body.email) {
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
});
