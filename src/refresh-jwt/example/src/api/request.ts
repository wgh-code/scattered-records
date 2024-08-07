import axios from "axios";
import { RespStatus, StorageKey } from "../constants";
import { refreshToken, refreshTokenUrl } from ".";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  const token =
    config.url === refreshTokenUrl
      ? localStorage.getItem(StorageKey.REFRESH_TOKEN)
      : localStorage.getItem(StorageKey.TOKEN);

  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

request.interceptors.response.use(async (resp) => {
  if (
    resp.data.status === RespStatus.UNAUTHORIZED &&
    resp.config.url !== refreshTokenUrl
  ) {
    const isSuccess = await handleRefreshToken();
    if (isSuccess) {
      return request(resp.config);
    } else {
      console.log("Re login");
    }
  }

  return resp.data;
});

async function handleRefreshToken() {
  const res = await refreshToken();
  if (res.status === RespStatus.SUCCESS) {
    localStorage.setItem(StorageKey.TOKEN, res.token);
    localStorage.setItem(StorageKey.REFRESH_TOKEN, res.refresh_token);

    return true;
  }

  return false;
}

export default request;
