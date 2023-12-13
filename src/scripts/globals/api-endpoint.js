import CONFIG from "./config";

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL_API}motors`,
  DETAIL: (id) => `${CONFIG.BASE_URL_API}motors/detail/${id}`,
  POST_MOTOR: `${CONFIG.BASE_URL_API}motors/create/upload`,
  REGISTER: `${CONFIG.BASE_URL_API}register`,
  COMMENT: (id) => `${CONFIG.BASE_URL_API}motors/${id}/comments`,
};

export default API_ENDPOINT;