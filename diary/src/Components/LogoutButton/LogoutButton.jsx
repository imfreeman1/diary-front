/* eslint-disable no-unused-vars */
import React from 'react';
import useAxios from 'src/hooks/useAxios';

const LogoutButton = () => {
  const {
    response, error, loading, operation,
  } = useAxios();
  const handleLogout = () => {
    operation({
      method: 'post',
      url: '/users/signout',
      payload: {
        email: 'mmmm@m.com',
        password: 'mmmm',
        name: '이이이',
        image: '',
        image_type: '',
      },
    });
  };
  return (
    <button
      onClick={handleLogout}
      type="button"
      className="m-5 p-5 bg-blue-50"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
