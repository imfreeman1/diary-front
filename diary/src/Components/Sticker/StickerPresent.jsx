/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BiX } from 'react-icons/bi';
import Image from 'next/image';

const StickerPresent = ({
  id,
  imgURL,
  selected,
  focusRef,
  focusHandler,
  removeStickerHandler,
  blurHandler,
}) => (
  <div
    className="absolute draggable"
    id={id}
    role="button"
    tabIndex={0}
    ref={focusRef}
    onBlur={selected ? (e) => blurHandler(e) : null}
  >
    <div
      className={`${selected ? 'resizable ring' : null}`}
      onDoubleClick={(e) => focusHandler(e)}
    >
      {selected && (
        <BiX
          className="absolute -right-2 -top-6 hover:cursor-pointer pl-1 mb-1"
          onClick={(e) => removeStickerHandler(e)}
          size={24}
        />
      )}
      <Image
        className="object-fill w-full h-full"
        src={imgURL}
        width={500}
        height={500}
        alt="스티커"
      />
    </div>
  </div>
);

StickerPresent.propTypes = {
  id: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  focusRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
  focusHandler: PropTypes.func.isRequired,
  removeStickerHandler: PropTypes.func.isRequired,
  blurHandler: PropTypes.func.isRequired,
};

export default StickerPresent;
