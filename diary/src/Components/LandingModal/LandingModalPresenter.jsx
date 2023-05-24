/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SignupModalContainer from '../SignupModal/SignupModalContainer';
import LoginModalContainer from '../LoginModal/LoginModalContainer';

const LandingModalPresenter = ({ modalRef, setIsSignup, isSignup }) => (
  <div className="fixed top-0 left-0 h-screen w-screen bg-opacity-20 bg-[#000000]">
    <div ref={modalRef} className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[410px] h-fit items-center">
      <div className="flex flex-col bg-white justify-center p-10 shadow-md rounded-2xl">
        {isSignup
          ? <SignupModalContainer setIsSignup={setIsSignup} />
          : <LoginModalContainer setIsSignup={setIsSignup} />}
      </div>
    </div>
  </div>
);

LandingModalPresenter.propTypes = {
  modalRef: PropTypes.object.isRequired,
  setIsSignup: PropTypes.func.isRequired,
  isSignup: PropTypes.bool.isRequired,
};

export default LandingModalPresenter;
