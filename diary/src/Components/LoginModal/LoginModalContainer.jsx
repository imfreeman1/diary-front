import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { LOGIN_EMAIL, LOGIN_PWD } from 'src/Constants/LoginConstant';
import useAxios from 'src/hooks/useAxios';
import LoginModalPresenter from './LoginModalPresenter';

const LoginModalContainer = ({ setIsSignup }) => {
  const router = useRouter();
  // const googleUrl = ((router.state)?.from?.pathname) || '/';
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const passwordRegister = register(LOGIN_PWD.name, LOGIN_PWD.option);
  const emailRegister = register(LOGIN_EMAIL.name, LOGIN_EMAIL.option);
  const { operation, response } = useAxios();
  const POST_LOGIN_OPT = (resData) => ({
    method: 'post',
    url: '/users/signin/',
    payload: {
      email: resData.email,
      password: resData.password,
      name: '',
      image: '',
    },
  });
  const handleLogin = handleSubmit(async (resData) => {
    try {
      await operation(POST_LOGIN_OPT(resData));
      console.log(response);
      if (response.data.code === 'USI20001') {
        router.push('/Cover');
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <LoginModalPresenter
      handleLogin={handleLogin}
      isSubmitting={isSubmitting}
      setIsSignup={setIsSignup}
      passwordRegister={passwordRegister}
      emailRegister={emailRegister}
      register={register}
      // googleUrl={googleUrl}
    />
  );
};
LoginModalContainer.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};
export default LoginModalContainer;
