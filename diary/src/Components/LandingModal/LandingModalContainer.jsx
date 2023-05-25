/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LandingModalPresenter from './LandingModalPresenter';

// onSignup true => 회원가입 페이지
// onSignup false => 로그인 페이지
const LandingModalContainer = ({ modalRef }) => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <LandingModalPresenter modalRef={modalRef} isSignup={isSignup} setIsSignup={setIsSignup} />
  );
};
LandingModalContainer.propTypes = {
  modalRef: PropTypes.object.isRequired,
};
export default LandingModalContainer;
