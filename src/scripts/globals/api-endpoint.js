import CONFIG from "./config";

const API_ENDPOINT = {
    LIST: `${CONFIG.BASE_URL_API}motors`,
    DETAIL: (id) => `${CONFIG.BASE_URL_API}motors/${id}`,
  };
  
  export default API_ENDPOINT;