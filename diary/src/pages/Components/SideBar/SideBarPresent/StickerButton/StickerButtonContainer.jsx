import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { setSticker } from "@/Redux/action";
import { CURRENT_ROUTER_PATH } from "@/Constants/constants";
import StickerButtonPresent from "./StickerButtonPresent";

function StickerButtonContainer({ imgURL, id }) {
  const dispatch = useDispatch();
  const currRouter = CURRENT_ROUTER_PATH();
  const makeStickerHandler = (e) => {
    const stickerPosition = {
      x: e.view.innerWidth / 2,
      y: e.view.innerHeight / 2,
    };
    dispatch(setSticker({ origin: currRouter, id, position: stickerPosition }));
  };
  return (
    <StickerButtonPresent
      id={id}
      imgURL={imgURL}
      makeStickerHandler={makeStickerHandler}
    />
  );
}

export default StickerButtonContainer;
