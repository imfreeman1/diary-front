import React from 'react';
import Image from 'next/image';
import bookDrop from 'public/Lottie/bookdrop.json';
import Logo from 'public/Logo/logo.svg';
import Pen from 'public/Logo/pen.svg';
import Lottie from 'lottie-react';
// import GleLoginContainer from '../Components/GleLoginContainer';
import Button from 'src/Components/Button';
import { useRouter } from 'next/router';
import { LANDING_PAGE_CONTENT } from '../Constants/constants';

function Landing() {
  const router = useRouter();
  const onClick = () => {
    router.push('/Login');
  };
  return (
    <>
      <div className="flex items-center justify-between px-8 absolute w-full h-12 bg-white">
        <Image
          width={72}
          src={Logo}
          alt="로고"
        />
        <Image
          width={32}
          src={Pen}
          alt="로고"
        />
      </div>
      <div className=" w-full h-screen bg-slate-200 flex flex-col gap-6 items-center justify-center">
        <Lottie animationData={bookDrop} />
        <div className="text-5xl font-bold">{LANDING_PAGE_CONTENT}</div>
        <Button content="로그인" className="bg-blue-400 w-40 h-11 rounded-xl shadow-lg text-white mt-3" onClick={onClick} />
        {/* <GleLoginContainer /> */}
      </div>
    </>
  );
}
export default Landing;
