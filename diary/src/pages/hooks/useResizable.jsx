import {
  CURRENT_ROUTER_PATH,
  STICKER_IMG_SIZE_OBJECT,
} from "@/constants/constants";
import { setResize } from "@/Redux/action";
import interact from "interactjs";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const useResizable = () => {
  const stickerSize = useRef({ x: 0, y: 0 });
  const stickerTimer = useRef(null);
  const dispatch = useDispatch();
  const currRouter = useRef(null);
  currRouter.current = CURRENT_ROUTER_PATH();

  const debounce = (id, time, timer) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      dispatch(
        setResize({ origin: currRouter.current, id, size: stickerSize.current })
      );
      timer.current = null;
    }, time);
  };

  useEffect(() => {
    interact(".resizable").resizable({
      edges: {
        top: true,
        left: true,
        bottom: true,
        right: true,
      },
      // invert: 'reposition',
      listeners: {
        move(event) {
          const parentId = event.target.parentNode.id;
          // console.log('tt', event.target.dataset);
          stickerSize.current.width = event.rect.width;
          stickerSize.current.height = event.rect.height;
          // 여기 부분에서 debounce가 아닌 mouseUp될때 dispatch를 실행할 수 있도록 변경해야하 할 것 같음. draggable에서도 동일.
          debounce(parentId, 500, stickerTimer);
          Object.assign(
            event.target.style,
            STICKER_IMG_SIZE_OBJECT(
              stickerSize.current.width,
              stickerSize.current.height
            )
          );
        },
      },
    });
  }, []);
};

export default useResizable;
