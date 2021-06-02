import reducer from "./auth";
import * as actionTypes from "../actions/actionsTypes";
//testing redux
describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });

  it("should store the token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "someToken",
          userId: "someUserId"
        }
      )
    ).toEqual({
      token: "someToken",
      userId: "someUserId",
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });
});
