import ax from "./axios.config";

const login = async (data) => {
  try {
    return await ax.post("auth/token/", data);
  } catch (error) {
    return error;
  }
};

const logout = async () => {
  try {
    return await ax.post("auth/logout/");
  } catch (error) {
    return error;
  }
};

const toExport = {
  login,
  logout,
};

export default toExport;
