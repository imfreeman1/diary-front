import React from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import Sticker from './Components/Sticker/Sticker';
import StickerTable from './Components/StickerTable/StickerTable';

function Test() {
  const stickers = useSelector((state) => state.stickerReducer.sticker);
  return (
    <div>
      <div>
        {stickers.Test?.map((val) => (
          <Sticker
            url={val.url}
            key={v4()}
            id={val.id}
            position={[val['data-x'], val['data-y']]}
            width={val.width}
            height={val.height}
          />
        ))}
      </div>
      <StickerTable />
    </div>

  );
}

export default Test;
