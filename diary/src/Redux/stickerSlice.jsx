import { createSlice, current } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { STICKER_NAME } from './sliceName';

const STICKER = (
  id,
  imgURL,
  positionX,
  positionY,
  width,
  height,
  selected,
) => ({
  id,
  imgURL,
  positionX,
  positionY,
  width,
  height,
  selected,
});

const makeSticker = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i += 1) {
    const exPicture = STICKER(v4(), '/Logo/pen.svg', 0, 0, 70, 70, false);
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
      updateStickers: [],
    },
  },
  reducers: {
    setSticker: (
      { stickersObj },
      {
        payload: {
          id,
          position: { positionX, positionY },
          origin,
          newId,
          pageDate,
        },
      },
    ) => {
      const selectedSticker = stickersObj.Table.find(
        (sticker) => sticker.id === id,
      );
      // 여기서 문제가 생김 table의 sticker id와 page에서 sticker id가 같아짐. 선택된 스티커를 깊은 복사로 복제하여, id를 변경해주어야함.
      const newSticker = {
        ...selectedSticker,
        id: newId,
        positionX,
        positionY,
      };

      if (!stickersObj[origin][pageDate]) stickersObj[origin][pageDate] = [];

      const foundedStickerArr = current(stickersObj)[origin][pageDate];
      // if의 있는 조건 결과물을 변수로 한번 빼내자
      const selectedChecker = foundedStickerArr.some(
        (sticker) => sticker.selected,
      );
      if (selectedChecker) {
        foundedStickerArr.map(({ selected }) => (selected = false));
      }

      stickersObj[origin][pageDate] = [...foundedStickerArr, newSticker];
    },

    getStickers: (
      { stickersObj },
      { payload: { origin, getStickerArray, pageDate } },
    ) => {
      stickersObj[origin][pageDate] = getStickerArray.map(
        ({
          id, image, position, size,
        }) => STICKER(id, image, position[0], position[1], size[0], size[1], false),
      );
    },

    removeSticker: ({ stickersObj }, { payload: { id, origin, pageDate } }) => {
      stickersObj[origin][pageDate] = stickersObj[origin][pageDate].filter(
        (sticker) => sticker.id !== id,
      );
    },

    setPosition: (
      { stickersObj },
      {
        payload: {
          origin,
          id,
          position: { positionX, positionY },
          pageDate,
        },
      },
    ) => {
      const foundedStickerArr = stickersObj[origin][pageDate];
      const selectedSticker = foundedStickerArr.find(
        (sticker) => sticker.id === id,
      );
      if (!selectedSticker.selected) {
        foundedStickerArr.map((sticker) => (sticker.selected = false));
      }
      selectedSticker.positionX = positionX;
      selectedSticker.positionY = positionY;
      const foundedUpdateStickers = stickersObj.updateStickers.find((sticker)=> sticker.id === id);
      if (foundedUpdateStickers) {
        foundedUpdateStickers.position = [positionX, positionY];
      } else {
        const updateSticker = {id, position:[positionX, positionY], size:[selectedSticker.width, selectedSticker.height]};
        stickersObj.updateStickers= [...stickersObj.updateStickers, updateSticker];
      }
    },

    setResize: (
      { stickersObj },
      {
        payload: {
          origin,
          id,
          size: { width, height },
          position: { x, y },
          pageDate,
        },
      },
    ) => {
      const foundedStickerArr = stickersObj[origin][pageDate];
      const selectedSticker = foundedStickerArr.find(
        (sticker) => sticker.id === id,
      );
      selectedSticker.positionX += x;
      selectedSticker.positionY += y;
      selectedSticker.width = width;
      selectedSticker.height = height;
      const foundedUpdateStickers = stickersObj.updateStickers.find((sticker)=> sticker.id === id);
      if (foundedUpdateStickers) {
        foundedUpdateStickers.size = [width, height];
      } else {
        const updateSticker = {id, position:[x,y], size:[width,height]};
        stickersObj.updateStickers = [...stickersObj.updateStickers, updateSticker];
      }
    },

    resetUpdate : ({ stickersObj },) => {
      stickersObj.updateStickers = [];
    },

    addTableSticker: (
      { stickersObj },
      {
        payload: {
          imgURL,
          size: { width, height },
        },
      },
    ) => {
      const newSticker = STICKER(v4(), imgURL, 0, 0, width, height, false);
      stickersObj.Table.push(newSticker);
    },

    setSelect: ({ stickersObj }, { payload: { origin, id, pageDate } }) => {
      const foundedStickerArr = stickersObj[origin][pageDate];
      const selectedChecker = foundedStickerArr.some(
        (sticker) => sticker.selected === true,
      );
      if (selectedChecker) {
        foundedStickerArr.map((sticker) => (sticker.selected = false));
      }
      const selectedSticker = foundedStickerArr.find(
        (sticker) => sticker.id === id,
      );
      selectedSticker.selected = !selectedSticker.selected;
    },

    resetSelect: ({ stickersObj }, { payload: { origin, pageDate } }) => {
      stickersObj[origin][pageDate].map(({ selected }) => (selected = false));
    },
  },
});

const stickerReducer = stickerSlice.reducer;

export { stickerReducer };
