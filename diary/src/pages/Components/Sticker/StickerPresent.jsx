import React from "react";
import PropTypes from "prop-types";
import { STICKER_CLOSE_BUTTON_CONTENT } from "@/Constants/constants";
import Button from "../Button";

const StickerPresent = ({
  id,
  imgURL,
  selected,
  focusHandler,
  removeStickerHandler,
  blurHandler,
}) => (
  <div
    className="absolute draggable"
    id={id}
    tabIndex={0}
    onBlur={selected ? (e) => blurHandler(e) : null}
  >
    <div
      className={`${selected ? "resizable ring" : null}`}
      onDoubleClick={(e) => focusHandler(e)}
    >
      {selected ? (
        <Button
          className="absolute -right-2 -top-6"
          onClick={(e) => removeStickerHandler(e)}
          content={STICKER_CLOSE_BUTTON_CONTENT}
        />
      ) : null}
      <img
        className="object-fill w-full h-full"
        src={imgURL}
        width={screen.width}
        height={screen.height}
        alt="스티커"
      />
    </div>
  </div>
);

StickerPresent.propTypes = {};

export default StickerPresent;
