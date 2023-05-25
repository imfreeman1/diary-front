import React from 'react';
import PropTypes from 'prop-types';
import SignupFinishModalPresenter from './SignupFinishModalPresenter';

const SignupFinishModalContainer = ({ setIsSignup }) => (
  <SignupFinishModalPresenter setIsSignup={setIsSignup} />
);
SignupFinishModalContainer.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};
export default SignupFinishModalContainer;
