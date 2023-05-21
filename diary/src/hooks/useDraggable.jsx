import { useLayoutEffect, useRef } from 'react';
import interact from 'interactjs';
import { useDispatch, useSelector } from 'react-redux';
import { setPosition } from 'src/Redux/action';
import {
  CURRENT_ROUTER_PATH,
  STICKER_POSITION_TRANSLATOR,
} from 'src/Constants/constants';
import debounce from 'src/Utils/debounce';

const useDraggable = (position, pageDate) => {
  const positions = useRef(null);
  const dispatch = useDispatch();
  positions.current = position;
  const currRouter = CURRENT_ROUTER_PATH();
  const currStickersList = useSelector(
    (state) => state.stickerReducer.stickersArray[currRouter][pageDate],
  );
  // 라이브러리 세팅은 config 따로 관리하자
  useLayoutEffect(
    () => {
      interact('.draggable').draggable({
        overlap: 'pointer',
        restrict: {
          elementRect: {
            top: 0,
            left: 0,
            bottom: 1,
            right: 1,
          },
        },
        listeners: {
          start: (event) => {
            const currSticker = currStickersList.find(
              (sticker) => sticker.id === event.target.id,
            );
            positions.current = {
              positionX: currSticker.positionX,
              positionY: currSticker.positionY,
            };
          },
          move: (event) => {
            const styleOfTarget = event.target.style;
            positions.current.positionX += event.dx;
            positions.current.positionY += event.dy;
            styleOfTarget.transform = STICKER_POSITION_TRANSLATOR(
              positions.current,
            );
            const callBackDispatch = () => dispatch(
              setPosition({
                origin: currRouter,
                id: event.target.id,
                position: positions.current,
                pageDate,
              }),
            );
            debounce(400, callBackDispatch);
          },
        },
      });
      return () => {
        clearTimeout(debounce);
      };
    },
    [dispatch],
  );
};

export default useDraggable;
