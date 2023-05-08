/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useForm } from 'react-hook-form';
import LogoutButton from 'src/Components/LogoutButton/LogoutButton';
import useAxios from 'src/hooks/useAxios';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const handleLogin = handleSubmit((resData) => {
    const { response, loading, error } = useAxios({
      method: 'post',
      url: '/users/signin',
      body: JSON.stringfy({
        email: resData.email,
        password: resData.password,
        name: '',
        image: '',
        image_type: '',
      }),
      routePath: 'Main',
    });
    console.log('login page', response, loading, error);
  });

  // const { response, loading, error } = useAxios({
  //   method: 'post',
  //   url: '/users/signin',
  //   body: JSON.stringfy({
  //     email: resData.email,
  //     password: resData.password,
  //     name: '',
  //     image: '',
  //     image_type: '',
  //   }),
  // });

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">
          이메일
          <input
            id="email"
            type="email"
            placeholder="test@email.com"
            {...register('email')}
          />
        </label>
        <label htmlFor="password">
          비밀번호
          <input
            id="password"
            type="password"
            placeholder="****************"
            {...register('password')}
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          로그인
        </button>
      </form>
      <LogoutButton />
    </>
  );
};

export default Login;
