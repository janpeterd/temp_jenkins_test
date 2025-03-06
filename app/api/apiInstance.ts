import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // ADD Bearer token to request
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);
