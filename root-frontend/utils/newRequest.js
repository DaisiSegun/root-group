import axios from "axios";

const newRequest = axios.create({
  baseURL: "/api/", // Update to match the path configured in your Vite proxy
  withCredentials: true,
});

export default newRequest;
