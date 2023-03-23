import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { setSticker } from "@/Redux/action";

function StickerButton({ imgURL, id }) {
  const dispatch = useDispatch();
  const currRouter = useRouter().pathname.replace("/", "");
  const makeStickerHandler = (e) => {
    const stickerPosition = {
      x: e.view.innerWidth / 2,
      y: e.view.innerHeight / 2,
    };
    dispatch(setSticker({ origin: currRouter, id, position: stickerPosition }));
  };
  return (
    <button
      id={id}
      onDoubleClick={(e) => makeStickerHandler(e)}
      className="w-16 h-16"
    >
      <img
        className=" object-fill w-full h-full"
        src={imgURL}
        width={100}
        height={100}
        alt=""
      />
    </button>
  );
}

export default StickerButton;
