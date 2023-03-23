import React from "react";
import StickerButton from "./StickerButton";
import { v4 } from "uuid";

function StickerColumn({ tableList }) {
  return (
    <tr>
      {tableList.map((sticker) => (
        <td className="p-2" key={v4()}>
          <StickerButton imgURL={sticker.imgURL} id={sticker.id} />
        </td>
      ))}
    </tr>
  );
}

export default StickerColumn;
