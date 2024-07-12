import axios from "axios";
import { BASE_API } from "@/constants";
export const apiClient = axios.create({
  baseURL: BASE_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
