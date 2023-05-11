import axios from './api';

const utilAxios = async (sevURL, transMethod, payload, header) => {
  try {
    const response = await axios.request({
      url: sevURL,
      method: transMethod,
      data: payload,
      headers: header,
      withCredentials: true,
    });
    if (response.data.code === 'STKC10001') {
      console.log(response.data.msg);
    }
  } catch (error) {
    console.log(error);
  }
};

export default utilAxios;
