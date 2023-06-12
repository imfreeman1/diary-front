import React, { useRef } from 'react';
import axios from 'src/Utils/api';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import SignupFormModalPresenter from './SignupFormModalPresenter';

const SignupFormModalContainer = ({ setIsSignup }) => {
  const passwordRef = useRef(null);
  const {
    register,
    getValues,
    handleSubmit,
    formState: {
      isSubmitting, isDirty, errors,
    },
  } = useForm();

  const handleSignup = handleSubmit(async (resData) => {
    try {
      const response = await axios.post(
        '/users/signup',
        {
          email: resData.email,
          password: resData.password,
          name: resData.name,
          image: '',
        },
        { withCredentials: true },
      );
      if (response.data.code === 'USI10001') {
        setIsSignup(false);
      } else {
        console.log('가입 실패');
      }
    } catch (error) {
      console.log(error);
    }
  });

  passwordRef.current = getValues('password');
  const Regex = {
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    name: /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/,
  };
  const emailRegister = register('email', {
    required: { value: true, message: '이메일을 입력해주세요' },
    pattern: { value: Regex.email, message: '이메일 형식을 입력해주세요' },
  });

  // isDirty를 사용해야 내가 입력한 값이 몇 자리인지 알 수 있을 것 같은데?
  const passwordRegister = register('password', {
    required: { value: true, message: '비밀번호를 입력해주세요' },
    minLength: { value: 4, message: '4자리이상 입력해주세요' },
    maxLength: { value: 16, message: '16자리이하로 입력해주세요' },
  });
  const passwordCheckRegister = register('passwordCheck', {
    required: { value: true, message: '비밀번호를 입력해주세요' },
    minLength: { value: 4, message: '4자리이상 입력해주세요' },
    validate: {
      check: (passwordCheck) => passwordCheck === passwordRef.current || '비밀번호가 다릅니다',
    },
  });
  const nameRegister = register('name', {
    required: { value: true, message: '이름을 입력해주세요' },
    pattern: { value: Regex.name, message: '이름을 다시 확인해주세요' },
  });
  const formArr = [
    {
      id: 'name', type: 'text', register: nameRegister, invalid: errors.name, placeholder: '이름',
    },
    {
      id: 'email', type: 'text', register: emailRegister, invalid: errors.email, placeholder: '이메일',
    },
    {
      id: 'password', type: 'password', register: passwordRegister, invalid: errors.password, placeholder: '비밀번호',
    },
    {
      id: 'passwordCheck', type: 'password', register: passwordCheckRegister, invalid: errors.passwordCheck, placeholder: '비밀번호 확인',
    },
  ];
  return (
    <SignupFormModalPresenter
      setIsSignup={setIsSignup}
      handleSignup={handleSignup}
      formArr={formArr}
      isDirty={isDirty}
      isSubmitting={isSubmitting}
    />
  );
};

SignupFormModalContainer.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};
export default SignupFormModalContainer;
