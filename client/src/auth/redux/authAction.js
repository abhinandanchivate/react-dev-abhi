import { setAlert } from "../../core/redux/coreActions";
import { loadUser, registerUser } from "../services/auth.service";
import { AUTH_ERROR, REGISTER_SUCCESS, USER_LOADED } from "./types";

// api/auth : get method to load the user details
export const loadUserDetailsAction = () => async (dispatch) => {
  try {
    const res = await loadUser();
    console.log("load user action" + res);
    dispatch({
      type: USER_LOADED,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// will hold the changes needs to be done in the store.
export const registerAction = (formData) => async (dispatch) => {
  // dispatch : is a function provided by the store.
  // its job is to send actions to the redux store . so that reducer can update the state.
  // redux thunk will provide the same .
  try {
    const res = await registerUser(formData);
    console.log(res);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res,
    });
    //success alert
    dispatch(setAlert("Registered successfully", "success"));
    dispatch(loadUserDetailsAction());
  } catch (err) {
    const errors = err.data;
    console.log(JSON.stringify(errors));
    // err.data
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
