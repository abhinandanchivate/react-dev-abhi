/**
 * type: public
 * path: /api/users
 * method: POST
 * description: Register a new user
 * request body: { name, email, password }
 */

import API from "../../utils/api";

export const registerUser = async (userData) => {
  try {
    const response = await API.post("/users", userData);
    return response.data.token;
  } catch (err) {
    const res = err.response;
    return res;
  }
};
