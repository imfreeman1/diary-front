import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { STICKER_NAME } from './sliceName';

const makeSticker = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i += 1) {
    const exPicture = {
      id: v4(),
      imgURL: '/Logo/pen.svg',
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

/*
stickerState = {
  monthly: {
    '2023-05-01':[
      {sticker}
    ]
  }

}
*/

const exStickers = makeSticker(10);

export const stickerSlice = createSlice({
  name: STICKER_NAME,
  initialState: {
    stickersArray: {
      Monthly: {},
      Table: [...exStickers],
      Weekly: {},
      Daily: {},
    },
  },
  reducers: {
    setSticker: ({ stickersArray }, {
      payload: {
        id, position, origin, newId, pageDate,
      },
    }) => {
      const selectedSticker = stickersArray.Table.find(
        (sticker) => sticker.id === id,
      );
      // 여기서 문제가 생김 table의 sticker id와 page에서 sticker id가 같아짐. 선택된 스티커를 깊은 복사로 복제하여, id를 변경해주어야함.
      const newSticker = selectedSticker;
      newSticker.id = newId;
      newSticker.positionX = position.positionX;
      newSticker.positionY = position.positionY;
      // if의 있는 조건 결과물을 변수로 한번 빼내자
      const selectedChecker = stickersArray[origin][pageDate]?.some(
        (sticker) => sticker.selected === true,
      );
      if (selectedChecker) {
        stickersArray[origin][pageDate].map((sticker) => sticker.selected = false);
      }
      stickersArray[origin][pageDate] = [...stickersArray[origin][pageDate], newSticker];
    },
    getStickers: ({ stickersArray }, { payload: { origin, getStickerArray, pageDate } }) => {
      const newStickersArray = getStickerArray.map((sticker) => {
        const newSticker = {
          id: sticker.id,
          imgURL: `${sticker.image}`,
          positionX: sticker.position[0],
          positionY: sticker.position[1],
          height: sticker.size[0],
          width: sticker.size[1],
          selected: false,
        };
        return newSticker;
      });
      stickersArray[origin][pageDate] = newStickersArray;
    },
    removeSticker: ({ stickersArray }, { payload: { id, origin, pageDate } }) => {
      stickersArray[origin][pageDate] = stickersArray[origin][pageDate].filter(
        (sticker) => sticker.id !== id,
      );
    },
    setPosition: ({ stickersArray }, {
      payload: {
        origin, id, position, pageDate,
      },
    }) => {
      const selectedSticker = stickersArray[origin][pageDate].find(
        (sticker) => sticker.id === id,
      );
      if (!selectedSticker.selected) {
        stickersArray[origin][pageDate]
          .map((sticker) => sticker.selected = false);
      }
      selectedSticker.positionX = position.positionX;
      selectedSticker.positionY = position.positionY;
    },
    setResize: (
      { stickersArray },
      {
        payload: {
          origin, id, size, position, pageDate,
        },
      },
    ) => {
      const selectedSticker = stickersArray[origin][pageDate].find(
        (sticker) => sticker.id === id,
      );
      selectedSticker.positionX += position.x;
      selectedSticker.positionY += position.y;
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
    setSelect: ({ stickersArray }, { payload: { origin, id, pageDate } }) => {
      const selectedChecker = stickersArray[origin][pageDate].some(
        (sticker) => sticker.selected === true,
      );
      if (selectedChecker) {
        stickersArray[origin][pageDate]
          .map((sticker) => sticker.selected = false);
      }
      const selectedSticker = stickersArray[origin][pageDate].find(
        (sticker) => sticker.id === id,
      );
      selectedSticker.selected = !selectedSticker.selected;
    },
    resetSelect: ({ stickersArray }, { payload: { origin, pageDate } }) => {
      stickersArray[origin][pageDate].map((sticker) => sticker.selected = false);
    },
  },
});

const stickerReducer = stickerSlice.reducer;

export { stickerReducer };
