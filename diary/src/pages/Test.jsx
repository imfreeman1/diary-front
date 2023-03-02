import React from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import Sticker from './Components/Sticker/Sticker';
import StickerTable from './Components/StickerTable/StickerTable';

function Test() {
  const stickerList = useSelector((state) => state.stickerReducer.sticker);
  return (
    <div>
      <div className=' relative'>
        {stickerList.Test?.map((sticker) => (
          <Sticker
            url={sticker.url}
            key={v4()}
            id={sticker.id}
            position={[sticker['data-x'], sticker['data-y']]}
            width={sticker.width}
            height={sticker.height}
            selected={sticker.selected}
          />
        ))}
      </div>
      <StickerTable />
    </div>

  );
}

export default Test;
