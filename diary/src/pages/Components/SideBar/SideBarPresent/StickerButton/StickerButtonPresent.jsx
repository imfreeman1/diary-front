import React from "react";
import PropTypes from "prop-types";

const StickerButtonPresent = (imgURL, id, makeStickerHandler) => (
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

StickerButtonPresent.propTypes = {};

export default StickerButtonPresent;
