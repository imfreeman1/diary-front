import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { setSticker } from '@/Redux/stickerAction';

function StickerButton({ url, id }) {
  const currRef = useRef(null);
  currRef.current = id;
  const dispatch = useDispatch();
  const currRouter = useRouter().pathname.replace('/', '');
  const makeStickerHandler = () => {
    dispatch(setSticker({ ref: currRouter, id: currRef.current }));
  };
  return (
    <button id={id} onClick={makeStickerHandler} className="w-20 h-20">
      <img className=" object-fill" src={url} width={100} height={100} alt="" />
    </button>
  );
}

export default StickerButton;
