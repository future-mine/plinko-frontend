import axios from 'axios';

const attachBearerToken = (token) => {
  axios.interceptors.request.use((config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });
};

export default attachBearerToken;
