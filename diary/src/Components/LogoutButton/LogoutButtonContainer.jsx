/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import useAxios from 'src/hooks/useAxios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import Button from '../Button/Button';
import 'react-toastify/dist/ReactToastify.css';

const LogoutButton = () => {
  // const { response, error, loading } = useAxios();
  const router = useRouter();
  const notify = () => toast('Wow so easy !');
  const handleLogout = () => {
    notify();
    // operation({
    //   method: 'post',
    //   url: '/users/signout',
    // });
  };
  // useEffect(() => {
  //   if (response?.code === 'USO10001') {
  //     router.push('/Landing');
  //   }
  // }, [response]);
  return (
    <>
      <Button
        onClick={handleLogout}
        type="button"
        className="bg-blue-500 text-white w-24 h-10 rounded-md my-auto font-medium hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 duration-200  "
        content="LogOut"
      />
      <ToastContainer />
    </>
  );
};

export default LogoutButton;
