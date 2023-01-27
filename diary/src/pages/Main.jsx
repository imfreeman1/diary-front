import React from 'react'
import Image from 'next/image'
import Month from 'public/Img/month.png';

const Main = () => {

  return (
    <>
    <div className='h-12 bg-slate-600'>Header</div>
    <div className='h-full text-slate-50'>
        Header
        <div className='bg-black w-3/5 mx-auto mt-10 text-center'> 환영합니다
            <div>시작하기...
                <button className='bg-gray-600 rounded'>다이어리 만들기</button>
            </div>
            <div>𝟐𝟎𝟐3 𝐌𝐲 𝐃𝐢𝐚𝐫𝐲 ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
            <Image src={Month} alt="Month img" width={500} height={500} priority></Image>
            <div>Monthly ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
            <Image src={Month} alt="Month img" width={500} height={500} priority></Image>
            <div>Weekly ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
            <Image src={Month} alt="Month img" width={500} height={500} priority></Image>
            <div>Daily ⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼</div>
            <Image src={Month} alt="Month img" width={500} height={500} priority></Image>

        </div>    
    </div>
    <div className='h-12 bg-slate-600'>Footer</div>

    </>
  )
}

export default Main