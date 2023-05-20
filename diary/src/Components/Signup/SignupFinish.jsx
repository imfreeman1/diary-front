import React from 'react';

const SignupFinish = ({ setOnSignup }) => (
  <div className="flex flex-col justify-center items-center">
    <p className="w-72 text-center text-gray-400 bg-gray-200 p-3 mt-10">ssss1111sss@diary.com</p>
    <button
      type="button"
      onClick={() => setOnSignup(false)}
      className="w-72 bg-orange-300 text-white rounded-md mt-10 p-2.5"
    >
      로그인
    </button>
    <div className="text-sm text-center mt-2">
      <span className="text-gray-700">메일을 못받으셨나요? </span>
      <span
        onClick={() => console.log('이메일을 다시 보냈습니다.')}
        aria-hidden="true"
        type="button"
        className="w-fit text-red-600 cursor-pointer hover:underline"
      >
        이메일 다시 보내기
      </span>
    </div>

  </div>

);

export default SignupFinish;
