/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const LandingModal = () => {
  const [onSignup, setOnSignup] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[410px] h-fit items-center">
      <div className="flex flex-col bg-white justify-center border border-black p-10 shadow-md rounded-2xl">
        {onSignup
          ? <SignupModal setOnSignup={setOnSignup} onSignup={onSignup} />
          : <LoginModal setOnSignup={setOnSignup} />}
      </div>
    </div>
  );
};

export default LandingModal;
