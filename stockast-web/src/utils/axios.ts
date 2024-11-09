import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
});

// 요청 인터셉터 등록 (JWT 헤더 포함)
axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization =
      'Bearer ' + localStorage.getItem('accessToken');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 등록 (JWT 만료 확인)
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.data == 'jwt expired') {
      window.location.reload();
    }

    return Promise.reject(error);
  }
);
