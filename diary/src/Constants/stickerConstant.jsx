export const STICKER_CONST = {
  IMG_SIZE_OBJECT: (width, height, x, y) => ({
    width: `${width}px`,
    height: `${height}px`,
    transform: `translate(${x}px, ${y}px)`,
  }),
  POSITION_TRANSLATOR: (position) => `translate(${position.positionX}px, ${position.positionY}px)`,
};

export const STICKER_DATA = (id, position, width, height, routerRef) => {
  const { positionX, positionY } = position;
  return {
    id,
    position: [positionX, positionY],
    size: [height, width],
    page_type: routerRef?.toLowerCase(),
  };
};

export const UPDATE_STICKER_OPTIONS = (data) => ({
  url: '/sticker/update',
  method: 'post',
  data,
});

export const REMOVE_STICKER_OPTIONS = (data) => ({
  url: '/sticker/delete',
  method: 'post',
  data,
  getReturn: true,
});
