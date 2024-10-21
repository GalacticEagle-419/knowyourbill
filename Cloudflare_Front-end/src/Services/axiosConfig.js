import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_LANGFLOW_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Response interceptor to handle errors and responses
client.interceptors.response.use(
  (response) => {
    return {
      data: response.data,
      status: response.status,
      error: null,
    };
  },
  (error) => {
    return {
      data: null,
      status: error.response.status,
      error: error.response.data,
    };
  }
);

// Request interceptor to handle requests
client.interceptors.request.use((config) => {
  if (process.env.REACT_APP_LANGFLOW_API_KEY) {
    config.headers["Authorization"] = `Bearer ${process.env.REACT_APP_LANGFLOW_API_KEY}`
  }
  return config;
});

export default client;
