/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { SIGNUP } from 'src/Constants/constants';

const SignupFormModalPresenter = ({
  setIsSignup, handleSignup, formArr,
  isDirty, isSubmitting,
}) => (
  <>
    <form
      className="flex flex-col gap-1 my-10"
      onSubmit={handleSignup}
    >
      {formArr.map((element) => (
        <div key={v4()} className="flex flex-col">
          <input
            id={element.id}
            type={element.type}
            {...element.register}
            aria-invalid={!isDirty ? element.invalid : false}
            className="border-2 rounded-md px-3 h-10"
            placeholder={element.placeholder}
          />
          <span className="text-pink-300 text-sm px-3">
            {element.invalid ? element.invalid.message : ' '}
          </span>
        </div>
      ))}
      <button
        className="w-full bg-orange-300 text-white rounded-md p-2.5"
        type="submit"
        disabled={isSubmitting}
      >
        {SIGNUP.SUBMIT}
      </button>
    </form>
    <div className="text-sm text-center mt-2">
      <span className="text-gray-700">{SIGNUP.IS_ALREADY_SIGNUP}</span>
      <span
        onClick={() => setIsSignup(false)}
        aria-hidden="true"
        type="button"
        className="w-fit text-blue-900 cursor-pointer hover:underline"
      >
        {SIGNUP.GO_LOGIN}
      </span>
    </div>
  </>
);
SignupFormModalPresenter.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  formArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    register: PropTypes.shape({
      name: PropTypes.string,
      onChange: PropTypes.func,
      onBlur: PropTypes.func,
      ref: PropTypes.func,
    }).isRequired,
    invalid: PropTypes.object,
    placeholder: PropTypes.string.isRequired,
  })),
  isDirty: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
//   errors: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
SignupFormModalPresenter.defaultProps = {
  formArr: PropTypes.arrayOf(PropTypes.shape({
    invalid: PropTypes.isNotNull,
  })),
};
export default SignupFormModalPresenter;
