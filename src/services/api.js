import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.137:3334',
});

export default api;
