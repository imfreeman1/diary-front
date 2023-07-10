import {
  useLayoutEffect, useRef,
} from 'react';
import interact from 'interactjs';
import { useDispatch, useSelector } from 'react-redux';
import { setPosition } from 'src/Redux/action';
import {
  CURRENT_ROUTER_PATH,
} from 'src/Constants/constants';
import debounce from 'src/Utils/debounce';
import { STICKER_CONST } from 'src/Constants/stickerConstant';

const useDraggable = (position, pageDate) => {
  const currRouter = CURRENT_ROUTER_PATH();
  const dispatch = useDispatch();
  const positions = useRef(null);
  const currStickersList = useSelector(
    (state) => state.stickerReducer.stickersObj[currRouter][pageDate],
  );

  // useMemo(()=> currStickersList.map(({id, positionX, positionY})=>{
  //   console.log(id, positionX, positionY);
  // }), [currStickersList])
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
            currStickersList.find(
              // eslint-disable-next-line array-callback-return
              ({ id, positionX, positionY }) => {
                if (id === event.target.id) positions.current = { positionX, positionY };
              },
            );
          },
          move: (event) => {
            const styleOfTarget = event.target.style;
            positions.current.positionX += event.dx;
            positions.current.positionY += event.dy;
            styleOfTarget.transform = STICKER_CONST.POSITION_TRANSLATOR(
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
            debounce(100, callBackDispatch);
          },
        },
      });
      return () => {
        clearTimeout(debounce);
      };
    },
    [dispatch, currRouter, currStickersList, position, pageDate],
  );
};

export default useDraggable;
