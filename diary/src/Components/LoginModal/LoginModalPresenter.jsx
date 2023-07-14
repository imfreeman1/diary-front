import React from 'react';
import { LOGIN } from 'src/Constants/constants';
import PropTypes from 'prop-types';
// import getGoogleUrl from 'src/Utils/getGoogleUrl';

const LoginModalPresenter = ({
  handleLogin, emailRegister, passwordRegister, isSubmitting, setIsSignup,
}) => (
  <div className="flex flex-col justify-center gap-1">
    <p className="text-2xl mb-2 font-bold text-center">{LOGIN.CONTENT}</p>
    <form onSubmit={handleLogin}>
      <div className="flex justify-center m-3">
        <div className="flex flex-col justify-around">
          <p className="px-3">{LOGIN.FORM_EMAIL}</p>
          <p className="px-3">{LOGIN.FORM_PASSWORD}</p>
        </div>
        <div className="flex flex-col justify-between gap-1">
          <input
            id="email"
            type="email"
            placeholder="test@email.com"
            className="border-2 rounded-md h-10 px-3"
            {...emailRegister}
          />
          <input
            id="password"
            type="password"
            placeholder="****************"
            className="border-2 rounded-md h-10 px-3"
            {...passwordRegister}
          />
        </div>
      </div>
      <div className="m-6">
        <button
          className="w-full bg-orange-300 text-white rounded-md p-2.5"
          type="submit"
          disabled={isSubmitting}
        >
          {LOGIN.CONTENT_KR}
        </button>
        <div className="text-sm text-center mt-2">
          <span className="text-gray-700">{LOGIN.EXPLAIN_SIGNUP}</span>
          <span
            onClick={() => setIsSignup(true)}
            aria-hidden="true"
            className="w-fit text-blue-900 cursor-pointer hover:underline"
          >
            {LOGIN.GO_SIGNUP}
          </span>
        </div>
        <div className="text-sm text-center mt-2">
          <span className="text-gray-700">{LOGIN.EXPLAIN_LOSS_PASSWORD}</span>
          <span
            onClick={() => setIsSignup(true)}
            aria-hidden="true"
            className="w-fit text-blue-900 cursor-pointer hover:underline"
          >
            {LOGIN.FIND_PASSWORD}
          </span>
        </div>
      </div>
      <div />
    </form>
    <button
      type="button"
      className="bg-gray-300 p-2 px-10 rounded-xl"
    >
      {LOGIN.GOOGLE_SIMPLE}
    </button>
  </div>
);
LoginModalPresenter.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  passwordRegister: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    ref: PropTypes.func,
  }).isRequired,
  emailRegister: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    ref: PropTypes.func,
  }).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  setIsSignup: PropTypes.func.isRequired,
};
export default LoginModalPresenter;
