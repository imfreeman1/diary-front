import React from 'react';
import PropTypes from 'prop-types';
import { SIGNUP } from 'src/Constants/constants';
import SignupFinishModalContainer from '../SignupFinishModal/SignupFinishModalContainer';
import SignupFormModalContainer from '../SignupFormModal/SignupFormModalContainer';

const SignupModalPresenter = ({ isEmailPage, setIsEmailPage, setIsSignup }) => (
  <>
    <div className="flex flex-col justify-center gap-1">
      <span className="text-2xl mb-2 font-bold text-center">
        {isEmailPage ? SIGNUP.EMAIL_AUTH_PAGE : SIGNUP.SIGNUP_PAGE}
      </span>
      <div className="text-gray-400 text-sm text-center">
        {isEmailPage
          ? SIGNUP.EAMIL_AUTH_TEXT_LIST.map((text) => <p>{text}</p>)
          : SIGNUP.SIGNUP_TEXT_LIST.map((text) => <p>{text}</p>)}
      </div>
    </div>
    {isEmailPage
      ? <SignupFinishModalContainer setIsSignup={setIsSignup} />
      : <SignupFormModalContainer setIsSignup={setIsSignup} />}

    <button
      type="button"
      className="absolute bottom-0 bg-pink-200"
      onClick={() => setIsEmailPage(true)}
    >
      {SIGNUP.TEMPORARY_BUTTON}
    </button>
  </>
);

SignupModalPresenter.propTypes = {
  isEmailPage: PropTypes.bool.isRequired,
  setIsEmailPage: PropTypes.func.isRequired,
  setIsSignup: PropTypes.func.isRequired,
};
export default SignupModalPresenter;
