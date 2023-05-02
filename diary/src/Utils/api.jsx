import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.mydiary.site',
});

export default axios;
