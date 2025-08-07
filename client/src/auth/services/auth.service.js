/**
 * type: public
 * path: /api/users
 * method: POST
 * description: Register a new user
 * request body: { name, email, password }
 */

import API from "../../utils/api";

export const registerUser = async (userData) => {
  const response = await API.post("/api/users", userData);
  return response.data;
};
