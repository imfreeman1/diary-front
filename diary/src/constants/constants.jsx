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
export const NAV_ITEM_LIST = [
  "Cover",
  "2023",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "Weekly",
  "Daily",
  "Personal",
];
export const NAVBAR_HOVER_BG_COLOR_OBJECT = {
  Month: "hover:bg-gray-100",
  Weekly: "hover:bg-[#9DBC9D]",
};
export const LANDING_PAGE_CONTENT = "Let's Write";
export const STICKER_CLOSE_BUTTON_CONTENT = "X";
export const STICKER_SAVE_BUTTON_CONTENT = "저장";
export const SELECT_IN_STICKER_DIV = "img";

//얘들은 hook으로 빼내는게 좋지 않을까? 특히 PATH나 OBJECT 같은 경우.
export const STICKER_SELECTOR_ID = (id) => `[id="${id}"]`;
export const CURRENT_ROUTER_PATH = () => useRouter().pathname.replace("/", "");

export const STICKER_IMG_SIZE_OBJECT = (width, height) => {
  return {
    width: `${width}px`,
    height: `${height}px`,
  };
};

export const STICKER_POSITION_TRANSLATOR = (position) =>
  `translate(${position.positionX}px, ${position.positionY}px)`;
