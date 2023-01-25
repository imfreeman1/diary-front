import React from 'react';
import Image from 'next/image';
import bookDrop from 'public/Lottie/bookdrop.json';
import Logo from 'public/Logo/logo.svg';
import Pen from 'public/Logo/pen.svg';
import Lottie from 'lottie-react';
import GleLoginContainer from './Components/GleLoginContainer';

function Landing(props) {
  return (
    <>
      <div className="flex items-center justify-between px-8 absolute w-full h-12 bg-white">
        <Image width={72} src={Logo} alt="로고" />
        <Image width={32} src={Pen} alt="로고" />
      </div>
      <div className=" w-full h-screen bg-slate-200 flex flex-col gap-6 items-center justify-center">
        <Lottie animationData={bookDrop} />
        <div className="text-5xl font-bold">
          Let's Write
        </div>
        <GleLoginContainer />
      </div>
    </>
  );
}

export default Landing;
