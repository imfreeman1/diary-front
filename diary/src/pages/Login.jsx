import React from 'react';
import { useForm } from 'react-hook-form';
import axios from './Utils/api';

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
          await axios.post('/users/signin/', payload, {
            withCredentials: true,
          });
          alert('로그인 완료');
        } catch (e) {
          console.log(e);
        }
      })}
    >
      <label htmlFor="email">
        <span>이메일</span>
        <input
          id="email"
          type="email"
          placeholder="test@email.com"
          {...register('email')}
        />
      </label>
      <label htmlFor="password">
        <span>비밀번호</span>
        <input
          id="password"
          type="password"
          placeholder="****************"
          {...register('password')}
        />
      </label>
      <label htmlFor="name">
        <span>
          이름
        </span>
        <input
          id="name"
          type="string"
          placeholder="이름입력"
          {...register('name')}
        />
      </label>
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
}

export default Login;
