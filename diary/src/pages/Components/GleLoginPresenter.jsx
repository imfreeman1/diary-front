/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function GleLoginPresenter({ onclick }) {
  return (
    <button onClick={onclick} type="button" className="bg-blue-500 text-white w-48 h-10 rounded-lg"> Google Login </button>
  );
}

GleLoginPresenter.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default GleLoginPresenter;
