import request from "./request";
import { GetListVO, LoginVO } from "./type";

export const login = (): Promise<LoginVO> =>
  request.post("/login", {
    username: "admin",
    password: "123456",
  });

export const getList = (): Promise<GetListVO> => request("/list");

export const refreshTokenUrl = '/refresh-token'
export const refreshToken = (): Promise<LoginVO> => request(refreshTokenUrl)
