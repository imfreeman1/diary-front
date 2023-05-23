import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'src/Utils/api';
import PropTypes from 'prop-types';
import {
  FORM_EMAIL, FORM_PASSWORD, LOGIN_CONTENT, LOGIN_CONTENT_KR,
} from 'src/Constants/constants';

const LoginModal = ({ setOnSignup }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const handleLogin = handleSubmit(async (resData) => {
    try {
      const response = await axios.post(
        '/users/signin',
        {
          email: resData.email,
          password: resData.password,
          name: '',
          image: '',
          image_type: '',
        },
        {
          withCredentials: true,
        },
      );
      console.log(response);
      if (response.data.code === 'USI20001') {
        router.push('/Main');
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="flex flex-col justify-center gap-1">
      <p className="text-2xl mb-2 font-bold text-center">{LOGIN_CONTENT}</p>
      <form onSubmit={handleLogin}>
        <div className="flex justify-center m-3">
          <div className="flex flex-col justify-around">
            <p className="px-3">{FORM_EMAIL}</p>
            <p className="px-3">{FORM_PASSWORD}</p>
          </div>
          <div className="flex flex-col justify-between gap-1">
            <input
              id="email"
              type="email"
              placeholder="test@email.com"
              className="border-2 rounded-md h-10 px-3"
              {...register('email')}
            />
            <input
              id="password"
              type="password"
              placeholder="****************"
              className="border-2 rounded-md h-10 px-3"
              {...register('password')}
            />
          </div>
        </div>
        <div className="m-6">
          <button
            className="w-full bg-orange-300 text-white rounded-md p-2.5"
            type="submit"
            disabled={isSubmitting}
          >
            {LOGIN_CONTENT_KR}
          </button>
          <div className="text-sm text-center mt-2">
            <span className="text-gray-700">아직 회원이 아니라면? </span>
            <span
              onClick={() => setOnSignup(true)}
              aria-hidden="true"
              className="w-fit text-blue-900 cursor-pointer hover:underline"
            >
              회원가입 하러가기
            </span>
          </div>
          <div className="text-sm text-center mt-2">
            <span className="text-gray-700">비밀번호를 잃어버렸다면? </span>
            <span
              onClick={() => setOnSignup(true)}
              aria-hidden="true"
              className="w-fit text-blue-900 cursor-pointer hover:underline"
            >
              비밀번호 찾기
            </span>
          </div>
        </div>
        <div />
      </form>
      <button
        type="button"
        className="bg-gray-300 p-2 px-10 rounded-xl"
      >
        구글로 간편 로그인
      </button>
    </div>
  );
};
LoginModal.propTypes = {
  setOnSignup: PropTypes.func.isRequired,
};
export default LoginModal;
