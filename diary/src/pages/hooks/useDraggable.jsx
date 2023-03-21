import { useEffect, useRef } from "react";
import interact from "interactjs";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setPosition } from "@/Redux/action";
import { CURRENT_ROUTER_PATH } from "@/constants/constants";

const useDraggable = (position) => {
  const positions = useRef(position);
  const stickerTimer = useRef(null);
  const dispatch = useDispatch();
  const currRouter = CURRENT_ROUTER_PATH();
  const currStickersList = useSelector(
    (state) => state.stickerReducer.stickersArray[currRouter]
  );

  const debounce = (id, time, timer) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      dispatch(setPosition({ origin: currRouter, id, position: positions }));
      timer.current = null;
    }, time);
  };
  // 라이브러리 세팅은 config 따로 관리하자
  useEffect(() => {
    interact(".draggable").draggable({
      overlap: "pointer",
      restrict: {
        elementRect: {
          top: 0,
          left: 0,
          bottom: 1,
          right: 1,
        },
      },
      listeners: {
        start(event) {
          const currSticker = currStickersList.find(
            (sticker) => sticker.id === event.target.id
          );
          positions.positionX = currSticker.positionX;
          positions.positionY = currSticker.positionY;
          console.log(positions);
          console.log(positions.current);
          console.log(event);
          console.log(event.type, event.target);
        },
        move(event) {
          positions.positionX += event.dx;
          positions.positionY += event.dy;
          event.target.style.transform = `translate(${positions.positionX}px, ${positions.positionY}px)`;
          debounce(event.target.id, 300, stickerTimer);
        },
      },
    });
  }, []);
};

export default useDraggable;
