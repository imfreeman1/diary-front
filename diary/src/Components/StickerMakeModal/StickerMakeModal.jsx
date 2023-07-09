import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import StickerCropper from './StickerCropper';

function StickerMakeModal({ modalHandler }) {
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <div className=" h-screen w-screen">
      <div className="h-screen bg-opacity-75 bg-gray-400 flex justify-center items-center ">
        <div className=" sticky border-2 bg-white opacity-100" ref={focusRef}>
          <StickerCropper modalHandler={modalHandler} />
        </div>
      </div>
    </div>
  );
}

StickerMakeModal.propTypes = {
  modalHandler: PropTypes.func.isRequired,
};

export default StickerMakeModal;
