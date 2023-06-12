import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'src/Utils/api';
import PropTypes from 'prop-types';
import { LOGIN_EMAIL, LOGIN_PWD } from 'src/Constants/LoginConstant';
import LoginModalPresenter from './LoginModalPresenter';

const LoginModalContainer = ({ setIsSignup }) => {
  const router = useRouter();
  const googleUrl = ((router.state)?.from?.pathname) || '/';
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const passwordRegister = register(LOGIN_PWD.name, LOGIN_PWD.option);
  const emailRegister = register(LOGIN_EMAIL.name, LOGIN_EMAIL.option);

  const handleLogin = handleSubmit(async (resData) => {
    try {
      const response = await axios.post(
        '/users/signin',
        {
          email: resData.email,
          password: resData.password,
          name: '',
          image: '',
        },
        {
          withCredentials: true,
        },
      );
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
      googleUrl={googleUrl}
    />
  );
};
LoginModalContainer.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};
export default LoginModalContainer;
