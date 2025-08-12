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
    console.log("response.data.token" + response.data.token);
    return response.data.token;
  } catch (err) {
    const res = err.response;
    console.log(JSON.stringify(res));
    throw { data: err.response.data.errors, status: "fail" };
  }
};
// to load user /api/auth method get
export const loadUser = async () => {
  try {
    const response = await API.get("/auth");
    return response.data;
  } catch (err) {
    const res = err.response;
    return res;
  }
};
