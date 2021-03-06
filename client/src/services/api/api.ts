import axios from 'axios';

const instance = axios.create({
  //baseURL: 'http://localhost:3001/api/',
  baseURL: 'https://worldwidetickets-api.herokuapp.com/api/',
});

instance.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('token');
  config.headers.token = token ? token : '';
  return config;
});

export { instance };
