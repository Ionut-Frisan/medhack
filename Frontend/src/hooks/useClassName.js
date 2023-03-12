const useClassName = (config) => {
  let res = "";

  const getClassFromArray = (arr) => {
    arr.forEach((data) => {
      if (typeof data === "string") res = `${res} ${data}`;
      if (typeof data === "object") getClassFromObject(data);
    });
  };

  const getClassFromObject = (obj) => {
    Object.keys(obj).forEach((className) => {
      if (!!obj[className]) res = `${res} ${className}`;
    });
  };

  const getClasses = (config) => {
    config.forEach((data) => {
      if (typeof data === "string") res = `${res} ${data}`;
      if (typeof data === "object" && Array.isArray(data)) {
        getClassFromArray(data);
        return;
      }
      if (typeof data === "object") getClassFromObject(data);
    });
  };

  getClasses(config);

  return res;
};

export default useClassName;
