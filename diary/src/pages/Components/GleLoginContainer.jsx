/* eslint-disable react-hooks/rules-of-hooks */
import { useGoogleLogin } from '@react-oauth/google';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import getInfo from '../api/googleAPI';
import GleLoginPresenter from './GleLoginPresenter';
import { setAuth } from '@/Redux/action';

function GleLoginContainer() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
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
