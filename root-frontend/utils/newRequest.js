import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://busy-rose-nematode-sari.cyclic.app/api/",
  withCredentials: true,
});

export default newRequest;