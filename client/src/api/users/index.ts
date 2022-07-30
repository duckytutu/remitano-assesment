import { axios } from "../../configs/axiosConfig";
import { RegisterUserPayload, User } from "./typings";

export const registerUser = (payload: RegisterUserPayload) => {
  return axios.post<User>("/users", payload);
};
