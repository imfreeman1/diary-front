import { useRouter } from 'next/router';

// 상수는 대문자로 작성합니다.
/*
상수를 따로 빼놓을 때 고려할 사항!
1. 재사용성이 있는가?
2. 기능에 역할을 하고 있는가?
*/

// Landing
export const LANDING_PAGE_CONTENT = "Let's Write";

export const LANDING_NAV_LOGIN_GO = '로그인하기';

export const LOGIN = {
  CONTENT: 'LOGIN',
  FORM_NAME: '이름',
  FORM_EMAIL: '이메일',
  FORM_PASSWORD: '비밀번호',
  CONTENT_KR: '로그인',
  EXPLAIN_SIGNUP: '아직 회원이 아니라면? ',
  GO_SIGNUP: '회원가입 하러가기',
  EXPLAIN_LOSS_PASSWORD: '비밀번호를 잃어버렸다면? ',
  FIND_PASSWORD: '비밀번호 찾기? ',
  GOOGLE_SIMPLE: '구글로 간편 로그인',
};

export const SIGNUP = {
  EMAIL_AUTH_PAGE: '이메일 인증',
  EAMIL_AUTH_TEXT_LIST: ['마지막 단계입니다!',
    '인증 메일이 아래의 메일 주소로 전송되었습니다.',
    '24시간 이내로 인증을 완료해주세요!'],
  SIGNUP_PAGE: '회원가입',
  SIGNUP_TEXT_LIST: ['간편하게 회원가입하고', '다이어리를 이용해보세요'],
  TEMPORARY_BUTTON: '제출완료! 메일 전송 페이지 가보기',
  EMAIL_ISNOT_SEND: '메일을 못 받으셨나요? ',
  EMAIL_RESEND: '이메일 다시 보내기',
  SUBMIT: '제출',
  IS_ALREADY_SIGNUP: '이미 회원이신가요? ',
  GO_LOGIN: '로그인 하러가기',
};
export const SELECT_IN_STICKER_DIV = 'div';

// 얘들은 hook으로 빼내는게 좋지 않을까? 특히 PATH나 OBJECT 같은 경우.
export const CURRENT_ROUTER_PATH = () => useRouter().pathname.replace('/', '');
