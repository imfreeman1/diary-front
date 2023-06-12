export const LOGIN_REGX = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  name: /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/,
};

export const LOGIN_PWD = {
  name: 'password',
  option: {
    required: { value: true, message: '비밀번호를 입력해주세요' },
    minLength: { value: 4, message: '4자리이상 입력해주세요' },
    maxLength: { value: 16, message: '16자리이하로 입력해주세요' },
  },
};

export const LOGIN_EMAIL = {
  name: 'email',
  option: {
    required: { value: true, message: '이메일을 입력해주세요' },
    pattern: { value: LOGIN_REGX.email, message: '이메일 형식을 입력해주세요' },
  },
};
