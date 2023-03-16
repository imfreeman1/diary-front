import { useEffect, useRef } from 'react';
import interact from 'interactjs';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setPosition } from '@/Redux/action';

const useDraggable = (position) => {
  const positions = useRef(position);
  const stickerTimer = useRef(null);
  const dispatch = useDispatch();
  const currRouter = useRouter().pathname.replace('/', '');
  const stickerPosition = useSelector((state) => state.stickerReducer.stickersArray[currRouter]);

  const debounce = (id, time, timer) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      dispatch(setPosition({ origin: currRouter, id, position: positions.current }));
      timer.current = null;
    }, time);
  };
  // 라이브러리 세팅은 confing 따로 관리하자
  useEffect(() => {
    interact('.draggable').draggable({
      overlap: 'pointer',
      restrict: {
        elementRect: {
          top: 0,
          left: 0,
          bottom: 1,
          right: 1
        }},
      listeners: {
        start(event) {
          const currSticker = stickerPosition.find((val) => val.id === event.target.id);
          positions.current.x = currSticker['data-x'];
          positions.current.y = currSticker['data-y'];
          console.log(event);
          console.log(event.type, event.target);
        },
        move(event) {
            positions.current.x += event.dx;
            positions.current.y += event.dy;
            event.target.style.transform = `translate(${positions.current.x}px, ${positions.current.y}px)`;
            debounce(event.target.id, 300, stickerTimer);
        },
      },
    });
  }, []);
};

export default useDraggable;
