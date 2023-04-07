import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://132.145.86.117:3000/",
});

export default axios;
