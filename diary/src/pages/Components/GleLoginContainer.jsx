/* eslint-disable react-hooks/rules-of-hooks */
import { useGoogleLogin } from '@react-oauth/google';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { setAuth } from 'src/Redux/action';
import getInfo from '../api/googleAPI';
import GleLoginPresenter from './GleLoginPresenter';

function GleLoginContainer() {
  const dispatch = useDispatch();
  const [{ token }, setCookie] = useCookies(['token']);

  const setUserInfoCookies = (data) => {
    setCookie('token', data, { path: '/' });
  };

  const setUserInfo = (data) => {
    dispatch(setAuth({ data, setUserInfoCookies }));
  };

  const loginLogic = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      getInfo(tokenResponse.access_token, setUserInfo);
    },
  });

  return (
    <GleLoginPresenter onclick={loginLogic} />
  );
}

export default GleLoginContainer;
