import React, { useState } from 'react';
import SignupFinish from './SignupFinish';
import SignupForm from './SignupForm';

const SignupModal = ({
  setOnSignup,
  onSignup,
}) => {
  const [emailPage, setEmailPage] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center gap-1">
        <span className="text-2xl mb-2 font-bold text-center">
          {emailPage ? '이메일 인증' : '회원가입'}
        </span>
        <div className="text-gray-400 text-sm text-center">
          <p>
            {emailPage ? '마지막 단계입니다!' : '간편하게 회원가입하고'}
          </p>
          <p>
            {emailPage ? '인증 메일이 아래의 메일 주소로 전송되었습니다.' : '다이어리를 이용해보세요'}
          </p>
          <p>
            {emailPage ? '24시간 이내로 인증을 완료해주세요!' : ''}
          </p>
        </div>
      </div>
      {emailPage
        ? <SignupFinish setOnSignup={setOnSignup} />
        : <SignupForm setOnSignup={setOnSignup} onSignup={onSignup} />}

      <button
        type="button"
        className="absolute bottom-0 bg-pink-200"
        onClick={() => setEmailPage(true)}
      >
        [임시]제출 완료-&gt;메일 전송 페이지
      </button>
    </>
  );
};

export default SignupModal;
