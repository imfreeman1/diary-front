import React, { useRef } from 'react';
import EasyCropper from '../Sticker/EasyCropper';

function StickerMakeModal({ modalHandler }) {
  const focusRef = useRef(null);
  console.log(focusRef);
  return (
    <div className=" h-screen w-screen absolute z-[9999999]">
      <div className="h-full bg-opacity-75 bg-gray-400 flex justify-center z-40 items-center">
        <div className=" fixed border-2 bg-white z-50 opacity-100" ref={focusRef}>
          <EasyCropper modalHandler={modalHandler} />
        </div>
      </div>
    </div>

  );
}

export default StickerMakeModal;
