import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setSticker } from 'src/Redux/action';
import { CURRENT_ROUTER_PATH } from 'src/Constants/constants';
import urlToFile from 'src/Utils/urlToFile';
import makeFormData from 'src/Utils/makeFormData';
import utilAxios from 'src/Utils/utilAxios';
import { v4 } from 'uuid';
import { SET_STICKER_OPTIONS, STICKER_FORM_DATA_OBJ } from 'src/Constants/stickerConstant';
import StickerButtonPresent from './StickerButtonPresent';

function StickerButtonContainer({ sticker, pageDate }) {
  const dispatch = useDispatch();
  const currRouter = CURRENT_ROUTER_PATH();
  const makeStickerHandler = async ({ view: { innerHeight, innerWidth } }) => {
    const newId = v4();
    const [positionX, positionY] = [innerWidth / 2, innerHeight / 4];
    const imgFile = await urlToFile(sticker, 'image');
    const stickerFormDataObject = STICKER_FORM_DATA_OBJ(
      newId,
      pageDate,
      currRouter,
      imgFile,
      sticker,
      positionX,
      positionY,
    );
    const formData = makeFormData(stickerFormDataObject);
    const setStickerOptions = SET_STICKER_OPTIONS(formData);
    await utilAxios(setStickerOptions);
    dispatch(setSticker(
      {
        origin: currRouter, id: sticker.id, position: { positionX, positionY }, newId, pageDate,
      },
    ));
  };
  return (
    <StickerButtonPresent
      id={sticker.id}
      imgURL={sticker.imgURL}
      makeStickerHandler={makeStickerHandler}
    />
  );
}

export default StickerButtonContainer;
StickerButtonContainer.propTypes = {
  sticker: PropTypes.shape({
    id: PropTypes.string,
    imgURL: PropTypes.string,
    positionX: PropTypes.number,
    positionY: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    selected: PropTypes.bool,
  }).isRequired,
  pageDate: PropTypes.string.isRequired,
};
