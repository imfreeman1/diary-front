import interact from 'interactjs';
import { useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResize } from 'src/Redux/action';
import debounce from 'src/Utils/debounce';
import { STICKER_CONST } from 'src/Constants/stickerConstant';
import interactConfig from 'src/Config/interactConfig';
import { CURRENT_ROUTER_PATH } from '../Constants/constants';

const resizableStyleApply = (style, width, height, x, y) => {
  Object.assign(style, STICKER_CONST.IMG_SIZE_OBJECT(width, height, x, y));
};

const useResizable = (pageDate) => {
  const currRouter = CURRENT_ROUTER_PATH();
  const stickerSize = useRef(null);
  const dispatch = useDispatch();
  // const selectedSticker = useSelector(({stickerReducer})=> stickerReducer.stickersObj[currRouter][pageDate])
  useLayoutEffect(() => {
    const stickerResizeMoveMethod = ({ target, deltaRect, rect }) => {
      let { x, y } = target.dataset;
      x = parseFloat(x) + deltaRect.left || deltaRect.left;
      y = parseFloat(y) + deltaRect.top || deltaRect.top;

      stickerSize.current = {
        width: rect.width,
        height: rect.height,
      };
      // 여기 부분에서 debounce가 아닌 mouseUp될때 dispatch를 실행할 수 있도록 변경해야하 할 것 같음. draggable에서도 동일.
      resizableStyleApply(
        target.style,
        stickerSize.current.width,
        stickerSize.current.height,
        x,
        y,
      );
      /* move event가 발생하는 동안 event.target.dataset을 실시간 변경해줌. */
      Object.assign(target.dataset, { x, y });
      const callBackDispatch = () => {
        dispatch(
          setResize({
            origin: currRouter,
            id: target.parentNode.id,
            size: stickerSize.current,
            position: { x, y },
            pageDate,
          }),
        );
        resizableStyleApply(
          target.style,
          stickerSize.current.width,
          stickerSize.current.height,
          0,
          0,
        );
      };
      debounce(300, callBackDispatch);
    };

    interact('.resizable').resizable(
      interactConfig.resizable(stickerResizeMoveMethod),
    );
    return () => clearTimeout(debounce);
  }, [currRouter, dispatch, pageDate]);
};

export default useResizable;
