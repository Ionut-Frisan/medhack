import axios from "axios";
import { useSelector } from "react-redux";
import { getToken } from "../store/featutres/auth/auth-slice.js";

const useRequest = () => {
  axios.defaults.baseURL = "http://localhost:8080";
  const token = useSelector(getToken);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  const handler = async (config, errorCallback, successCallback) => {
    return await axios(config)
      .then((res) => {
        const returnObj = {
          data: res.data,
          status: res.data.status,
          statusCode: res.status,
        };
        if (successCallback && typeof successCallback === "function") {
          successCallback(returnObj);
        }
        return returnObj;
      })
      .catch((err) => {
        const returnObj = {
          data: undefined,
          statusCode: err.status,
          message: err.message,
        };
        if (errorCallback && typeof errorCallback === "function") {
          errorCallback(returnObj);
        }
        return returnObj;
      });
  };
  const get = async (path, config, successCallback, errorCallback) => {
    const getConfig = {
      ...config,
      method: "get",
      url: path,
    };
    return handler(getConfig, errorCallback, successCallback);
  };

  const post = async (path, config, successCallback, errorCallback) => {
    const postConfig = {
      ...config,
      method: "post",
      url: path,
    };
    return handler(postConfig, errorCallback, successCallback);
  };

  const put = async (path, config, successCallback, errorCallback) => {
    const putConfig = {
      ...config,
      method: "put",
      url: path,
    };
    return handler(putConfig, errorCallback, successCallback);
  };
  const patch = async (path, config, successCallback, errorCallback) => {
    const patchConfig = {
      ...config,
      method: "patch",
      url: path,
    };
    return handler(patchConfig, errorCallback, successCallback);
  };
  const del = async (path, config, successCallback, errorCallback) => {
    const deleteConfig = {
      ...config,
      method: "delete",
      url: path,
    };
    return handler(deleteConfig, errorCallback, successCallback);
  };
  return {
    get,
    put,
    post,
    patch,
    del,
    request: handler,
  };
};

export default useRequest;
