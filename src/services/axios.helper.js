import cook from "cookie";

const getUserToken = () => {
  const { auth } = JSON.parse(localStorage.getItem("persist:root"));
  const { token } = JSON.parse(auth);
  return token;
};

export const setTokenInHeader = (config) => {
  if (localStorage && localStorage.getItem("persist:root")) {
    const token = getUserToken();

    if (config.url === "auth/token/") {
      return config;
    } else {
      config.headers["Authorization"] = `Token ${token}`;
    }
  }
  return config;
};

export const extractAndSetCookieIfGiven = (config) => {
  if (config.data && config.data.cookie) {
    const payload = config.data;
    config.headers = { Cookie: payload.cookie };

    const cookie = cook.parse(payload.cookie);
    if (cookie && cookie.token) {
      config.headers["x-access-token"] = `Bearer ${cookie.token}`;
    }
    delete payload.cookie;
    config.data = payload;
  } else if (config.params && config.params.cookie) {
    const params = config.params;
    config.headers = { Cookie: params.cookie };

    const cookie = cook.parse(params.cookie);
    if (cookie && cookie.token) {
      config.headers["x-access-token"] = `Bearer ${cookie.token}`;
    }
    delete params.cookie;
    config.params = params;
  }
  return config;
};

export const redirectIfUnauthorized = (err) => {
  console.log(err);
};

export const redirectIfApiDown = (err) => {
  if (typeof err.response === "undefined" && err.message === "Network Error") {
    console.log(err);
  }
};

const toExport = {
  setTokenInHeader,
  extractAndSetCookieIfGiven,
  redirectIfUnauthorized,
  redirectIfApiDown,
};

export default toExport;
