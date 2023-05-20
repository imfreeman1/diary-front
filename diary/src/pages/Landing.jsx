import React, { useState } from 'react';
import Image from 'next/image';
import bookDrop from 'public/Lottie/bookdrop.json';
import Logo from 'public/Logo/logo.svg';
import Pen from 'public/Logo/pen.svg';
import Lottie from 'lottie-react';
// import GleLoginContainer from '../Components/GleLoginContainer';
import LandingModal from 'src/Components/Signup/LandingModal';
import { LANDING_PAGE_CONTENT } from '../Constants/constants';

const Landing = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between px-8 absolute w-full h-12 bg-white">
        <Image
          width={72}
          src={Logo}
          alt="로고"
        />
        <div className="w-56 flex justify-between">
          <button
            type="button"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => setModal(!modal)}
          >
            로그인하기
          </button>
          <Image
            width={32}
            src={Pen}
            alt="로고"
          />
        </div>
      </div>
      <div className=" w-full h-screen bg-slate-200 flex flex-col gap-6 items-center justify-center">
        <Lottie animationData={bookDrop} />
        <div className="text-5xl font-bold">{LANDING_PAGE_CONTENT}</div>
        {/* <GleLoginContainer /> */}
        {modal ? <LandingModal /> : null}
        <div />
      </div>
    </>
  );
};
export default Landing;
