import React from 'react';
import StickerButton from './StickerButton';

function StickerColumn({ tableList }) {
  return (
    <tr>
      {tableList.map((sticker) => (
        <td className='p-2' key={sticker.id}>
          <StickerButton
            url={sticker.url}
            id={sticker.id}
          />
        </td>
      ))}
    </tr>
  );
}

export default StickerColumn;
