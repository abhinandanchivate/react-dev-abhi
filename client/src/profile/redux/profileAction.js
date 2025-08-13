import { setAlert } from "../../core/redux/coreActions";
import {
  createOrUpdateProfile,
  getCurrentUserProfile,
} from "../services/profile.service";
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from "./types";

export const getCurrentUserProfileAction = () => async (dispatch) => {
  // we want to perform the rest call
  try {
    const response = await getCurrentUserProfile();
    console.log("inside the profile action");
    dispatch({
      type: GET_PROFILE,
      payload: response,
    });
  } catch (error) {
    console.log("action profile error get profile", JSON.stringify(error));

    dispatch({
      type: PROFILE_ERROR,
      payload: error,
    });
  }
  // handle the success ==> return profile object
  // handle the failure ==> return the error object.
};

export const createProfileAction =
  (formData, edit = false) =>
  async (dispatch) => {
    try {
      // Call service layer (axios call handled in profile.service.js)
      const data = await createOrUpdateProfile(formData);

      dispatch({
        type: UPDATE_PROFILE,
        payload: data,
      });

      dispatch(
        setAlert(edit ? "Profile Updated" : "Profile Created", "success")
      );
    } catch (err) {
      // Handle validation errors array if present
      if (err.errors) {
        err.errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.statusText, status: err.status },
      });
    }
  };
