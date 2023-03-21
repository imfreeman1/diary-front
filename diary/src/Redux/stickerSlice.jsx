import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const NAME = "sticker";

const makeSticker = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i += 1) {
    const exPicture = {
      id: v4(),
      imgURL: "/Logo/pen.svg",
      positionX: 0,
      positionY: 0,
      width: 70,
      height: 70,
      selected: false,
    };
    arr.push(exPicture);
  }
  return arr;
};

const exStickers = makeSticker(10);

export const stickerSlice = createSlice({
  name: NAME,
  initialState: {
    stickersArray: {
      Month: [],
      Table: [...exStickers],
      Weekly: [],
      Daily: [],
      Test: [],
    },
  },
  reducers: {
    setSticker: ({ stickersArray }, { payload: { id, position, origin } }) => {
      const selectedSticker = stickersArray.Table.find(
        (sticker) => sticker.id === id
      );
      selectedSticker.id = v4();
      selectedSticker.positionX = position.x;
      selectedSticker.positionY = position.y;
      // if의 있는 조건 결과물을 변수로 한번 빼내자
      const selectedChecker = stickersArray[origin].some(
        (sticker) => sticker.selected === true
      );
      if (selectedChecker)
        stickersArray[origin].map((sticker) => (sticker.selected = false));
      stickersArray[origin] = [...stickersArray[origin], selectedSticker];
    },
    removeSticker: ({ stickersArray }, { payload: { id, origin } }) => {
      stickersArray[origin] = stickersArray[origin].filter(
        (sticker) => sticker.id !== id
      );
    },
    setInit: ({ stickersArray }, { payload: { origin, selectedSticker } }) => {
      stickersArray[origin] = [...selectedSticker];
    },
    setPosition: ({ stickersArray }, { payload: { origin, id, position } }) => {
      const selectedSticker = stickersArray[origin].find(
        (sticker) => sticker.id === id
      );
      if (!selectedSticker.selected)
        stickersArray[origin].map((sticker) => (sticker.selected = false));
      selectedSticker.positionX = position.positionX;
      selectedSticker.positionY = position.positionY;
    },
    setResize: ({ stickersArray }, { payload: { origin, id, size } }) => {
      const selectedSticker = stickersArray[origin].find(
        (sticker) => sticker.id === id
      );
      selectedSticker.height = size.height;
      selectedSticker.width = size.width;
    },
    addTableSticker: ({ stickersArray }, { payload: { imgURL, size } }) => {
      const newSticker = {
        id: v4(),
        imgURL,
        positionX: 0,
        positionY: 0,
        width: size.width,
        height: size.height,
        selected: false,
      };
      stickersArray.Table.push(newSticker);
    },
    setSelect: ({ stickersArray }, { payload: { origin, id } }) => {
      const selectedChecker = stickersArray[origin].some(
        (sticker) => sticker.selected === true
      );
      if (selectedChecker)
        stickersArray[origin].map((sticker) => (sticker.selected = false));
      const selectedSticker = stickersArray[origin].find(
        (sticker) => sticker.id === id
      );
      selectedSticker.selected = !selectedSticker.selected;
    },
    resetSelect: ({ stickersArray }, { payload: { origin } }) => {
      stickersArray[origin].map((sticker) => (sticker.selected = false));
    },
  },
});

const stickerReducer = stickerSlice.reducer;

export { stickerReducer };
