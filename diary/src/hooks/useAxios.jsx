/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useState } from 'react';
import axios from 'src/Utils/api';

/**
 * axios
 * @param {url}
 * @param {method}
 * @param {body}
 * @param {routePath}
 */

const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const test = async (
    {
      method, url, payload, header, formdata,
    },
  ) => {
    try {
      setLoading(true);
      const headers = { ...header, 'Content-Type': formdata ? 'multipart/form-data' : 'application/json' };
      const result = await axios.request({
        method,
        url,
        data: payload,
        withCredentials: true,
        headers,
      });
      await setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const operation = useCallback((options) => test(options), []);

  return {
    response, error, loading, operation,
  };
};

export default useAxios;
