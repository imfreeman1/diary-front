import React from "react";
import PropTypes from "prop-types";
import { STICKER_CLOSE_BUTTON_CONTENT } from "@/constants/constants";
import Button from "../Button";

const StickerPresent = ({
  id,
  imgURL,
  width,
  height,
  selected,
  focusHandler,
  removeStickerHandler,
  blurHandler,
}) => {
  return (
    <div
      className="absolute draggable"
      id={id}
      tabIndex={0}
      onBlur={selected ? blurHandler : null}
    >
      {selected ? (
        <div className="flex justify-end m-1">
          <Button
            className="p-1"
            onClick={(e) => removeStickerHandler(e)}
            content={STICKER_CLOSE_BUTTON_CONTENT}
          />
        </div>
      ) : null}
      <img
        onDoubleClick={(e) => focusHandler(e)}
        className={`${selected ? "resizable ring" : null} object-fill`}
        src={imgURL}
        width={width}
        height={height}
        alt="스티커"
      />
    </div>
  );
};

StickerPresent.propTypes = {};

export default StickerPresent;
