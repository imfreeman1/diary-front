import React from 'react';
import Image from 'next/image';
import Month from 'public/Img/month.png';
import { useRouter } from 'next/router';

const Cover = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('Monthly');
  };
  return (
    <>
      <div className="h-12 bg-slate-200">Header</div>
      <div className="h-full">
        <div className="bg-gray-200 w-[950px] border-dashed border-2 border-black mx-auto my-10 p-5 text-center">
          <button className="bg-gray-300 m-2 p-2 text-lg border-black border-2 rounded" type="button" onClick={onClick}>❤귀염뽀작 다이어리 시작하기❤</button>
          <div className="text-gray-600 text-sm">
            <p>하루하루 일상을 기록할 다이어리를 소개합니다! ( ⸝⸝ ᷇࿀ ᷆⸝⸝ƪ)✧</p>
            <p>우리가 손수 쓰던 다이어리에 맞춰 Month, Weekly, Daily로 취향에 맞춰 쓸 수 있어요!</p>
            <p>그 밖의 편리한 기능도 넣었답니다.</p>
            <p>스티커를 붙여 다꾸다꾸도 할 수 있어요!</p>
          </div>
          <div className="border-dashed border-2 border-black p-5 m-5">𝟐𝟎𝟐3 𝐌𝐲 𝐃𝐢𝐚𝐫𝐲 ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
          <Image src={Month} alt="Month img" width="auto" height="auto" priority />
          <div className="border-dashed border-2 border-black p-5 m-5">Monthly ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
          <Image src={Month} alt="Month img" width="auto" height="auto" priority />
          <div className="border-dashed border-2 border-black p-5 m-5">Weekly ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
          <Image src={Month} alt="Month img" width="auto" height="auto" priority />
          <div className="border-dashed border-2 border-black p-5 m-5">Daily ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
          <Image src={Month} alt="Month img" width="auto" height="auto" priority />
        </div>
      </div>
      <div className="h-12 bg-slate-200">Footer</div>
    </>
  );
};

export default Cover;
