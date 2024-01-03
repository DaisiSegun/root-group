import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://api.roothq.africa",
  withCredentials: true,
});

export default newRequest;