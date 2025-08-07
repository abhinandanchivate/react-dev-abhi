// to perfrom the rest call wti h backend server  weneed the axios library
import axios from "axios";
const API = axios.create({
  baseURL: "/api",
  // vite server proxy will handle the baseURL
  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
API.interceptors.request.use(
  (config) => {
    // token
    const token = localStorage.getItem("token");
    config.ur;
    if (token) {
      config.headers["x-auth-token"] = `${token}`;
    }
    // You can modify the request config here
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default API;
