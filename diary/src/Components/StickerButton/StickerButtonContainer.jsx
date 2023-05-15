import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setSticker } from 'src/Redux/action';
import { CURRENT_ROUTER_PATH } from 'src/Constants/constants';
import urlToFile from 'src/Utils/urlToFile';
import makeFormData from 'src/Utils/makeFormData';
import utilAxios from 'src/Utils/utilAxios';
import { v4 } from 'uuid';
import StickerButtonPresent from './StickerButtonPresent';

function StickerButtonContainer({ sticker }) {
  const dispatch = useDispatch();
  const currRouter = CURRENT_ROUTER_PATH();
  const makeStickerHandler = async (e) => {
    const newId = v4();
    const positionX = e.view.innerWidth / 2;
    const positionY = e.view.innerHeight / 4;
    const imgFile = await urlToFile(sticker.imgURL, 'image');
    const stickerFormDataObject = {
      id: newId,
      page_date: '2023-05-10',
      page_type: currRouter.toLowerCase(),
      image_name: '이름',
      image: imgFile,
      'size[0]': sticker.height,
      'size[1]': sticker.width,
      'position[0]': positionX,
      'position[1]': positionY,
    };
    const formData = makeFormData(stickerFormDataObject);
    await utilAxios('/sticker/write', 'post', formData, {
      'Content-Type': 'multipart/form-data',
    });
    dispatch(setSticker(
      {
        origin: currRouter, id: sticker.id, position: { positionX, positionY }, newId,
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
};
