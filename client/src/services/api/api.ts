import axios from 'axios';

//axios.defaults.headers.common = { token: window.localStorage.getItem('token') };

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
