/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'src/Utils/api';
// import { removeCookie } from 'src/Utils/cookies';
/**
 * axios
 * @param {url}
 * @param {method}
 * @param {body}
 * @param {routePath}
 */

const useAxios = ({
  url, method, body, routePath,
}) => {
  const [respense, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const fetchData = async () => {
    await axios[method](url, JSON.parse(body), {
      withCredentials: true,
    })
      .then((res) => {
        console.log('useaxios', res);
        setResponse(res.data);
      })
      .then(() => {
        router.push(`/${routePath}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body]);

  return { respense, error, isLoading };
};

export default useAxios;

/*
const userData = (resData) => ({
  email: resData.email,
  password: resData.password,
  name: resData ? resData.name : '',
  image: '',
  image_type: '',
});

const Login = (resData) => {
  const router = useRouter();
  axios
    .post(
      '/users/signin/',
      userData(resData),
      {
        withCredentials: true,
      },
    )
    .then((res) => {
      console.log(res);
      // setCookie("Authorization", res.data.data.accessToken);
      // setCookie("Refresh", res.data.data.refreshToken);
    })
    // .then(() => router.push("/Main"))
    .catch((err) => console.log(err));
};

const signup = (resData) => {
  axios
    .post('/users/signup', userData(resData), {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
      router.push('/Login');
      // await alert('회원가입 완료');
    })
    .catch((err) => console.log(err));
};

const logout = () => {
  axios
    .post(
      '/users/signout/',
      {
        email: 'dmswl@dmswl.com',
        password: 'dmswl1',
        name: 'dmswl',
        image: '',
        image_type: '',
      },
      {
        withCredentials: true,
      },
    )
    .then((res) => {
      console.log(res);
      removeCookie('Authorization');
      removeCookie('Refresh');
    })
    .catch((err) => console.log(err));
};

*/
