import interact from 'interactjs';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResize } from '@/Redux/stickerAction';

const useResizable = () => {
  const stickerSize = useRef({ x: 0, y: 0 });
  const stickerTimer = useRef(null);
  const dispatch = useDispatch();
  const currRouter = useRouter().pathname.replace('/', '');
  const stickerResize = useSelector((state) => state.stickerReducer.sticker[currRouter]);

  const debounce = (id, time, timer) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      dispatch(setResize({ ref: currRouter, id, data: stickerSize.current }));
      timer.current = null;
    }, time);
  };

  useEffect(() => {
    interact('.resizable').resizable({
      edges: {
        top: true, left: true, bottom: true, right: true,
      },
      invert: 'reposition',
      listeners: {
        move(event) {
          const parentId = event.target.parentNode.id;
          // console.log('tt', event.target.dataset);
          stickerSize.current.x = event.rect.width;
          stickerSize.current.y = event.rect.height;
          debounce(parentId, 500, stickerTimer);
          Object.assign(event.target.style, {
            width: `${event.rect.width}px`,
            height: `${event.rect.height}px`,
          });
        },
      },
    });
    return () => {
      clearTimeout(debounce);
    };
  }, []);
};

export default useResizable;
