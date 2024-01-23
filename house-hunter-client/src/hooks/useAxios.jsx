import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosSecure = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const useAxios = () => {
  return { axiosPublic, axiosSecure };
};

export default useAxios;
