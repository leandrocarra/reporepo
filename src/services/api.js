import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.github.com'
  baseURL: 'https://kuantobuska.herokuapp.com/',
});

export default api;
