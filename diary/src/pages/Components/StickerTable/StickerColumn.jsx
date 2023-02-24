import React from 'react';
import StickerButton from './StickerButton';

function StickerColumn({ tableList }) {
  return (
    <tr>
      {tableList.map((val) => (
        <td key={val.id}>
          <StickerButton
            url={val.url}
            id={val.id}
          />
        </td>
      ))}
    </tr>
  );
}

export default StickerColumn;
