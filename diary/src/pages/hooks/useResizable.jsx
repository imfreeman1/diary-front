import { setResize } from '@/Redux/action';
import interact from 'interactjs';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useResizable = () => {
  const stickerSize = useRef({ x: 0, y: 0 });
  const stickerTimer = useRef(null);
  const dispatch = useDispatch();
  const currRouter = useRouter().pathname.replace('/', '');
  const stickerResize = useSelector((state) => state.stickerReducer.stickersArray[currRouter]);

  const debounce = (id, time, timer) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      dispatch(setResize({ origin: currRouter, id, size: stickerSize.current }));
      timer.current = null;
    }, time);
  };

  useEffect(() => {
    interact('.resizable').resizable({
      edges: {
        top: true, left: true, bottom: true, right: true,
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
          Object.assign(event.target.style, {
            width: `${event.rect.width}px`,
            height: `${event.rect.height}px`,
          });
        },
      },
    });
  }, []);
};

export default useResizable;
