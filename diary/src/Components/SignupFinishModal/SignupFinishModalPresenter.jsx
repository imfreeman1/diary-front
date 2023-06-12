import React from 'react';
import PropTypes from 'prop-types';
import { LOGIN, SIGNUP } from 'src/Constants/constants';

const SignupFinishModalPresenter = ({ setIsSignup }) => (
  <div className="flex flex-col justify-center items-center">
    <p className="w-72 text-center text-gray-400 bg-gray-200 p-3 mt-10">ssss1111sss@diary.com</p>
    <button
      type="button"
      onClick={() => setIsSignup(false)}
      className="w-72 bg-orange-300 text-white rounded-md mt-10 p-2.5"
    >
      {LOGIN.CONTENT_KR}
    </button>
    <div className="text-sm text-center mt-2">
      <span className="text-gray-700">{SIGNUP.EMAIL_ISNOT_SEND}</span>
      <span
        onClick={() => console.log('이메일을 다시 보냈습니다.')}
        aria-hidden="true"
        type="button"
        className="w-fit text-red-600 cursor-pointer hover:underline"
      >
        {SIGNUP.EMAIL_RESEND}
      </span>
    </div>
  </div>
);
SignupFinishModalPresenter.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};
export default SignupFinishModalPresenter;
