import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'src/Utils/api';
import PropTypes from 'prop-types';
import LoginModalContainer from './LoginModalContainer';

const LoginModalPresenter = ({ setIsSignup }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const Regex = {
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    name: /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/,
  };
  const passwordRegister = register('password', {
    required: { value: true, message: '비밀번호를 입력해주세요' },
    minLength: { value: 4, message: '4자리이상 입력해주세요' },
    maxLength: { value: 16, message: '16자리이하로 입력해주세요' },
  });
  const emailRegister = register('email', {
    required: { value: true, message: '이메일을 입력해주세요' },
    pattern: { value: Regex.email, message: '이메일 형식을 입력해주세요' },
  });

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
        router.push('/Main');
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <LoginModalContainer
      handleLogin={handleLogin}
      isSubmitting={isSubmitting}
      setIsSignup={setIsSignup}
      passwordRegister={passwordRegister}
      emailRegister={emailRegister}
      register={register}
    />
  );
};
LoginModalPresenter.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};
export default LoginModalPresenter;
