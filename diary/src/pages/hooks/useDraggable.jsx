import { useEffect, useRef } from 'react';
import interact from 'interactjs';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setPosition } from '@/Redux/stickerAction';

const useDraggable = (position) => {
  const positions = useRef(position);
  const stickerTimer = useRef(null);
  const dispatch = useDispatch();
  const currRouter = useRouter().pathname.replace('/', '');
  const stickerPosition = useSelector((state) => state.stickerReducer.sticker[currRouter]);

  const debounce = (id, time, timer) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      dispatch(setPosition({ ref: currRouter, id, data: positions.current }));
      timer.current = null;
    }, time);
  };
  useEffect(() => {
    interact('.draggable').draggable({
      listeners: {
        start(event) {
          const currSticker = stickerPosition.find((val) => val.id === event.target.id);
          positions.current[0] = currSticker['data-x'];
          positions.current[1] = currSticker['data-y'];
          console.log(event);
          console.log(event.type, event.target);
        },
        move(event) {
          positions.current[0] += event.dx;
          positions.current[1] += event.dy;
          event.target.style.transform = `translate(${positions.current[0]}px, ${positions.current[1]}px)`;
          debounce(event.target.id, 300, stickerTimer);
        },
      },
    });
    return () => {
      clearTimeout(debounce);
    };
  }, []);
};

export default useDraggable;
