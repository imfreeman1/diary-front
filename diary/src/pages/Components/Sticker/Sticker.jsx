import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useDraggable from '@/pages/hooks/useDraggable';
import useResizable from '@/pages/hooks/useResizable';
import Button from '../Button';

// 스티거 간의 우선순위를 어떻게 결정할 것인지도 고민해봐야 할 문제...

// sitckerReducer에 removeSticker action도 추가해야 함.

// ref를 사용하는게 아직 어색한 듯? 찾아봐도 사실 잘 모르겠음. 조금 더 공부가 필요함.

function Sticker({
  url, id, position, width, height,
}) {
  useDraggable(position);
  useResizable();
  const focusRef = useRef(null);
  useEffect(() => {
    const stickerPosition = document.querySelector(`[id="${id}"]`);
    stickerPosition.style.transform = `translate(${position[0]}px, ${position[1]}px)`;
    console.log('didMount', focusRef.current);
    return () => {
      console.log('willUnMount', focusRef.current);
    };
  }, []);
  const [buttonVisible, setButtonVisible] = useState(false);

  console.log(1, focusRef.current);
  const focusHandler = (e) => {
    console.log(2, focusRef.current);
    focusRef.current.focus();
    //    console.log(focusRef);
    console.log(e);
  };

  return (
    <div className="draggable absolute cursor-pointer" id={id} ref={focusRef} onClick={(e) => focusHandler(e)}>
      <Button className="fixed" content="X" />
      <img
        className="resizable border-2 border-black object-fil"
        src={url}
        width={width}
        height={height}
        id={id}
        alt="스티커"
      />
    </div>
  );
}

export default Sticker;
