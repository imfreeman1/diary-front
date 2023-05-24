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

const exStickers = makeSticker(10);

export const stickerSlice = createSlice({
  name: STICKER_NAME,
  initialState: {
    stickersObj: {
      Monthly: {},
      Table: [...exStickers],
      Weekly: {},
      Daily: {},
    },
  },
  reducers: {
    setSticker: ({stickersObj }, {
      payload: {
        id, position, origin, newId, pageDate,
      },
    }) => {
      const selectedSticker = stickersObj.Table.find(
        (sticker) => sticker.id === id,
      );
      // 여기서 문제가 생김 table의 sticker id와 page에서 sticker id가 같아짐. 선택된 스티커를 깊은 복사로 복제하여, id를 변경해주어야함.
      const newSticker = selectedSticker;
      newSticker.id = newId;
      newSticker.positionX = position.positionX;
      newSticker.positionY = position.positionY;
      // if의 있는 조건 결과물을 변수로 한번 빼내자
      const selectedChecker = stickersObj[origin][pageDate]?.some(
        (sticker) => sticker.selected,
      );
      if (selectedChecker) {
        stickersObj[origin][pageDate].map(({selected}) => selected = false);
      }
      stickersObj[origin][pageDate] = [...stickersObj[origin][pageDate], newSticker];
    },

    getStickers: ({ stickersObj }, { payload: { origin, getStickerArray, pageDate } }) => {
      const newStickersArray = getStickerArray.map(({id,image,position,size}) => {
        const newSticker = {
          id,
          imgURL: `${image}`,
          positionX: position[0],
          positionY: position[1],
          height: size[0],
          width: size[1],
          selected: false,
        };
        return newSticker;
      });
      stickersObj[origin][pageDate] = newStickersArray;
    },
    removeSticker: ({ stickersObj }, { payload: { id, origin, pageDate } }) => {
      stickersObj[origin][pageDate] = stickersObj[origin][pageDate].filter(
        (sticker) => sticker.id !== id,
      );
    },
    setPosition: ({ stickersObj }, {
      payload: {
        origin, id, position, pageDate,
      },
    }) => {
      const selectedSticker = stickersObj[origin][pageDate].find(
        (sticker) => sticker.id === id,
      );
      if (!selectedSticker.selected) {
        stickersObj[origin][pageDate]
          .map((sticker) => sticker.selected = false);
      }
      selectedSticker.positionX = position.positionX;
      selectedSticker.positionY = position.positionY;
    },
    setResize: (
      { stickersObj},
      {
        payload: {
          origin, id, size, position, pageDate,
        },
      },
    ) => {
      const selectedSticker = stickersObj[origin][pageDate].find(
        (sticker) => sticker.id === id,
      );
      selectedSticker.positionX += position.x;
      selectedSticker.positionY += position.y;
      selectedSticker.height = size.height;
      selectedSticker.width = size.width;
    },
    addTableSticker: ({ stickersObj }, { payload: { imgURL, size } }) => {
      const newSticker = {
        id: v4(),
        imgURL,
        positionX: 0,
        positionY: 0,
        width: size.width,
        height: size.height,
        selected: false,
      };
      stickersObj.Table.push(newSticker);
    },
    setSelect: ({ stickersObj }, { payload: { origin, id, pageDate } }) => {
      const selectedChecker = stickersObj[origin][pageDate].some(
        (sticker) => sticker.selected === true,
      );
      if (selectedChecker) {
        stickersObj[origin][pageDate]
          .map((sticker) => sticker.selected = false);
      }
      const selectedSticker = stickersObj[origin][pageDate].find(
        (sticker) => sticker.id === id,
      );
      selectedSticker.selected = !selectedSticker.selected;
    },
    resetSelect: ({ stickersObj }, { payload: { origin, pageDate } }) => {
      stickersObj[origin][pageDate].map(({selected}) => selected = false);
    },
  },
});

const stickerReducer = stickerSlice.reducer;

export { stickerReducer };
