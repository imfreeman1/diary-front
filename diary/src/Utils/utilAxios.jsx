/* eslint-disable consistent-return */
import axios from './api';

/**
 * @options의 prop
 * @param {url} String url
 * @param {method} String axios method
 * @param {data} any raw type과 FormData type
 * @param {headers} object axios headers object
 * @param {withCredentials} bool
 * @param {getReturn} bool 데이터 return의 여부를 결정
 * @returns {response} 통신의 결과물을 return
 */

const utilAxios = async (options) => {
  try {
    const response = await axios.request({
      url: options.url,
      method: options.method,
      data: options.data,
      headers: options.headers,
      withCredentials: options.withCredentials || true,
    });
    console.log(response);
    console.log(response.data.msg);
    if (options.getReturn) return response;
  } catch (error) {
    console.log('inUtilAxios', error);
  }
};

export default utilAxios;
