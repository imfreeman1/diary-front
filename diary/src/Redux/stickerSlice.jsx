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
    };
    arr.push(exPicture);
  }
  return arr;
};

const exStickers = makeSticker(10);

export const stickerSlice = createSlice({
  name: NAME,
  initialState: {
    sticker: {
      Month: [], Table: [...exStickers], Weekly: [], Daily: [], Test: [],
    },
  },
  reducers: {
    setSticker: (state, action) => {
      const data = state.sticker.Table.find((val) => val.id === action.payload.id);
      data.id = v4();
      state.sticker[action.payload.ref] = [...state.sticker[action.payload.ref], data];
    },
    removeSticker: (state) => {
      state.userInfo = {};
    },
    setInit: (state, action) => {
      state.sticker[action.payload.ref] = [...action.payload.data];
    },
    setPosition: (state, action) => {
      const data = state.sticker[action.payload.ref].find((val) => val.id === action.payload.id);
      data['data-x'] = action.payload.data[0];
      data['data-y'] = action.payload.data[1];
    },
    setResize: (state, action) => {
      const data = state.sticker[action.payload.ref].find((val) => val.id === action.payload.id);
      data.height = action.payload.data.y;
      data.width = action.payload.data.x;
    },
    addTableSticker: (state, action) => {
      const newSticker = {
        id: v4(),
        url: action.payload.url,
        'data-x': 0,
        'data-y': 0,
        width: action.payload.width,
        height: action.payload.height,
      };
      state.sticker.Table.push(newSticker);
    },
  },
});

const stickerReducer = stickerSlice.reducer;

export { stickerReducer };
