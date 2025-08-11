import { REGISTER_SUCCESS, USER_LOADED } from "./types";

// will hold the changes needs to be done in the store.
const initialState = {
  user: null, // to hold the user related info

  token: null,
  loading: false, // we need spinner while confirming the data / credentials with BE
  isAuthenticated: null, // to confirm that user is already authenticated
  errors: null, // to get the form handling errors.
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  // destructuring .
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload, // user loaded will bring ==> user data
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        loading: false,
        errors: [],
      };

    default:
      return state;
  }
};
