import axios from "axios";
import helpers from "./axios.helper";

const devUrl = "http://127.0.0.1:8000/api/v1/";
const prodUrl = "https://produrl.com/api/v1/";

const _axios = axios.create({
  baseURL: devUrl,
  // withCredentials: true,
});

_axios.interceptors.request.use(
  function (config) {
    config = helpers.setTokenInHeader(config);
    return config;
  },
  function (error) {
    // console.log(error.config);
    return Promise.reject(error);
  }
);

// _axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     console.log("XXXX - AJAX ERROR - XXXX", error);
//     console.log(error.response.status);

//     if (
//       (error.response && error.response.status === 401) ||
//       (error.response && error.response.status === 403)
//     ) {
//       // window["__NEXT_REDUX_STORE__"].dispatch(logout());

//       //   router.push("/");
//       return Promise.reject(error);
//     } else if (error.response) {
//       //   if (error.response.status === 404) {
//       //     router.push("/404");
//       //     return Promise.reject(error);
//       //   } else if (error.response.status === 500) {
//       //     router.push("/500");
//       //     return Promise.reject(error);
//       //   }
//     } else {
//       //   router.push("/503");
//       return Promise.reject(error);
//     }
//     return error;
//   }
// );

export default _axios;
