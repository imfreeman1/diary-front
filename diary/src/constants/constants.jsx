import { useRouter } from "next/router";

//상수는 대문자로 작성합니다.
/*
상수를 따로 빼놓을 때 고려할 사항!
1. 재사용성이 있는가?
2. 기능에 역할을 하고 있는가?
*/

export const SIDEBAR_OPENER = "열림";
export const SIDEBAR_CLOSER = "닫힘";
export const STICKER_MAKER_BUTTON_CONTENT = "스티커 만들기";

export const LANDING_PAGE_CONTENT = "Let's Write";
export const STICKER_CLOSE_BUTTON_CONTENT = "X";
export const STICKER_SAVE_BUTTON_CONTENT = "저장";
export const SELECT_IN_STICKER_DIV = "div";

//얘들은 hook으로 빼내는게 좋지 않을까? 특히 PATH나 OBJECT 같은 경우.
export const STICKER_SELECTOR_ID = (id) => `[id="${id}"]`;
export const CURRENT_ROUTER_PATH = () => useRouter().pathname.replace("/", "");

export const STICKER_IMG_SIZE_OBJECT = (width, height, x, y) => ({
  width: `${width}px`,
  height: `${height}px`,
  transform: `translate(${x}px, ${y}px)`,
});

export const STICKER_POSITION_TRANSLATOR = (position) =>
  `translate(${position.positionX}px, ${position.positionY}px)`;
