/* eslint-disable react-hooks/rules-of-hooks */
import { useGoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import { getInfo } from '../api/googleAPI';
import GleLoginPresenter from './GleLoginPresenter';

function GleLoginContainer() {
  const [userInfo, setUserInfo] = useState();
  const loginLogic = useGoogleLogin({
    onSuccess: (tokenResponse) => getInfo(tokenResponse.access_token, setUserInfo),
  });
  return (
    <GleLoginPresenter onclick={loginLogic} />
  );
}

export default GleLoginContainer;
