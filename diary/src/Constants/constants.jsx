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

export const LOGIN_CONTENT = 'LOGIN';
export const LOGIN_CONTENT_KR = '로그인';

export const FORM_NAME = '이름';
export const FORM_EMAIL = '이메일';
export const FORM_PASSWORD = '비밀번호';

export const SELECT_IN_STICKER_DIV = 'div';

// 얘들은 hook으로 빼내는게 좋지 않을까? 특히 PATH나 OBJECT 같은 경우.
export const STICKER_SELECTOR_ID = (id) => `[id="${id}"]`;
export const CURRENT_ROUTER_PATH = () => useRouter().pathname.replace('/', '');

export const STICKER_IMG_SIZE_OBJECT = (width, height, x, y) => ({
  width: `${width}px`,
  height: `${height}px`,
  transform: `translate(${x}px, ${y}px)`,
});

export const STICKER_POSITION_TRANSLATOR = (position) => `translate(${position.positionX}px, ${position.positionY}px)`;
