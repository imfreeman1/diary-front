import React from 'react';
import { useForm } from 'react-hook-form';
import axios from './Utils/api';
import { getCookie } from 'src/pages/Utils/useCookie';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(async (resData) => {
        try {
          const payload = {
            email: resData.email,
            password: resData.password,
            name: resData.name,
            image: '',
            image_type: '',
          };
          const data = await axios.post('/users/signin/', payload, {
            withCredentials: true,
          });
          alert('로그인 완료');
        } catch (e) {
          console.log(e);
        }
      })}
    >
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        placeholder="test@email.com"
        {...register('email')}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="****************"
        {...register('password')}
      />
      <label htmlFor="name">이름</label>
      <input
        id="name"
        type="string"
        placeholder="이름입력"
        {...register('name')}
      />
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
}

export default Login;
