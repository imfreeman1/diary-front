import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const NAME = 'sticker';

// 삭제reducer 필요.

const makeSticker = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i += 1) {
    const exPicture = {
      id: v4(),
      url: '/Logo/pen.svg',
      'data-x': 0,
      'data-y': 0,
      width: 70,
      height: 70,
      selected:false
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
      Month: [], Table: [...exStickers], Weekly: [], Daily: [], Test: [],
    },
  },
  reducers: {
    setSticker: ({stickersArray}, {payload:{id,position,origin}}) => {
      const data = stickersArray.Table.find((sticker) => sticker.id === id);
      data.id = v4();
      data['data-x'] = position.x;
      data['data-y'] = position.y;
      if (stickersArray[origin].filter((sticker)=> sticker.selected===true)) {
        stickersArray[origin].map((sticker)=> sticker.selected=false);
      }
      stickersArray[origin] = [...stickersArray[origin], data];
    },
    removeSticker: ({stickersArray}, {payload:{id,origin}}) => {
      stickersArray[origin]= stickersArray[origin].filter((sticker) => sticker.id !== id);
    },
    setInit: ({stickersArray}, {payload:{origin,data}}) => {
      stickersArray[origin] = [...data];
    },
    setPosition: ({stickersArray}, {payload:{origin,id,position}}) => {
      const data = stickersArray[origin].find((sticker) => sticker.id === id);
      if (!data.selected) stickersArray[origin].map((sticker)=> sticker.selected=false);
      data['data-x'] = position.x;
      data['data-y'] = position.y;
    },
    setResize: ({stickersArray}, {payload:{origin,id,size}}) => {
      const data = stickersArray[origin].find((sticker) => sticker.id === id);
      data.height = size.height;
      data.width = size.width;
    },
    addTableSticker: ({stickersArray}, {payload:{url,size}}) => {
      const newSticker = {
        id: v4(),
        url: url,
        'data-x': 0,
        'data-y': 0,
        width: size.width,
        height: size.height,
        selected:false
      };
      stickersArray.Table.push(newSticker);
    },
    setSelect: ({stickersArray}, {payload:{origin,id}}) => {
      if (stickersArray[origin].some((sticker)=> sticker.selected===true)) {
        stickersArray[origin].map((sticker)=> sticker.selected=false);
      }
      const data = stickersArray[origin].find((sticker) => sticker.id === id);
      data.selected = !(data.selected);
    },
    resetSelect: ({stickersArray}, {payload:{origin}}) => {
      stickersArray[origin].map((sticker)=> sticker.selected=false);
    }
  },
});

const stickerReducer = stickerSlice.reducer;

export { stickerReducer };
