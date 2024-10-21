import client from "./axiosConfig";

const postMessage = (messageText) => {
  const config = {
    url: "/bills?stream=false",
    method: "POST",
    data: {
      input_value: messageText,
    },
  };
  const response = client(config);
  return response;
};

export { postMessage };
