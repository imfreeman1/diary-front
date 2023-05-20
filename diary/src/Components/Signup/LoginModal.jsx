import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'src/Utils/api';
// import LogoutButton from 'src/Components/LogoutButton/LogoutButton';
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
      <p className="text-2xl mb-2 font-bold text-center">LOGIN</p>
      <form onSubmit={handleLogin}>
        <div className="flex justify-center m-3">
          <div className="flex flex-col justify-around">
            <p className="px-3">
              이메일
            </p>
            <p className="px-3">
              비밀번호
            </p>
          </div>
          <div className="flex flex-col justify-between gap-1">
            <input
              id="email"
              type="email"
              placeholder="test@email.com"
              className=" border-2 rounded-md h-10 px-3"
              {...register('email')}
            />
            <input
              id="password"
              type="password"
              placeholder="****************"
              className=" border-2 rounded-md h-10 px-3"
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
            로그인
          </button>
          <div className="text-sm text-center mt-2">
            <span className="text-gray-700">아직 회원이 아니라면? </span>
            <span
              onClick={() => setOnSignup(true)}
              aria-hidden="true"
              type="button"
              className="w-fit text-blue-900 cursor-pointer hover:underline"
            >
              회원가입 하러가기
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
      {/* <p className="mt-10">로그아웃 확인하기 위한 임시 버튼</p> */}
      {/* <LogoutButton /> */}
    </div>
  );
};

export default LoginModal;
