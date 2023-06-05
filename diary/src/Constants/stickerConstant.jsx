export const STICKER_CONST = {
  IMG_SIZE_OBJECT: (width, height, x, y) => ({
    width: `${width}px`,
    height: `${height}px`,
    transform: `translate(${x}px, ${y}px)`,
  }),
  POSITION_TRANSLATOR: (position) => `translate(${position.positionX}px, ${position.positionY}px)`,
};

export const STICKER_DATA = (id, position, height, width, routerRef) => {
  const { positionX, positionY } = position;
  return {
    id,
    position: [positionX, positionY],
    size: [height, width],
    page_type: routerRef?.toLowerCase(),
  };
};

export const GET_STICKER_OPTIONS = (currRouter, pageDate) => ({
  url: `/sticker/read/${currRouter.toLowerCase()}/${pageDate}/`,
  method: 'get',
});

export const UPDATE_STICKER_OPTIONS = (payload) => ({
  url: '/sticker/update',
  method: 'post',
  payload,
});

export const REMOVE_STICKER_OPTIONS = (payload) => ({
  payload,
  url: '/sticker/delete',
  method: 'post',
  getReturn: true,
});

export const SET_STICKER_OPTIONS = (payload) => ({
  url: '/sticker/write',
  method: 'post',
  header: { 'Content-Type': 'multipart/form-data' },
  payload,
  formdata: true,
});

export const STICKER_FORM_DATA_OBJ = (
  id,
  pageDate,
  currRouter,
  imgFile,
  sticker,
  positionX,
  positionY,
) => ({
  id,
  page_date: pageDate,
  page_type: currRouter.toLowerCase(),
  image_name: '이름',
  image: imgFile,
  'size[0]': sticker.height,
  'size[1]': sticker.width,
  'position[0]': positionX,
  'position[1]': positionY,
});
