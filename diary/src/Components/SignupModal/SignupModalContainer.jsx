import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SignupModalPresenter from './SignupModalPresenter';

const SignupModalContainer = ({ setIsSignup }) => {
  const [isEmailPage, setIsEmailPage] = useState(false);

  return (
    <SignupModalPresenter
      isEmailPage={isEmailPage}
      setIsEmailPage={setIsEmailPage}
      setIsSignup={setIsSignup}
    />
  );
};
SignupModalContainer.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};
export default SignupModalContainer;
