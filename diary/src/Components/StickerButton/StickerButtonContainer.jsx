import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setSticker } from 'src/Redux/action';
import { CURRENT_ROUTER_PATH } from 'src/Constants/constants';
import axios from 'src/Utils/api';
import StickerButtonPresent from './StickerButtonPresent';

function StickerButtonContainer({ sticker }) {
  const dispatch = useDispatch();
  const currRouter = CURRENT_ROUTER_PATH();
  const makeStickerHandler = (e) => {
    const stickerPosition = {
      positionX: e.view.innerWidth / 2,
      positionY: e.view.innerHeight / 4,
    };
    const formData = new FormData();
    formData.append('id', sticker.id);
    formData.append('size', [sticker.height, sticker.width]);
    formData.append('page_type', currRouter);
    formData.append('position', stickerPosition);
    formData.append('page_date', '2023-05-10');
    formData.append('image_name', '이름');

    // URL string, method string, router string, pageDate string, stickerData object
    const test = async (URL, method, router, pageDate, stickerData) => {
      try {
        const checker = await axios.request({
          URL,
          method,
          page_type: router,
          page_date: pageDate,
          stickerData,
        });
        console.log(checker);
      } catch (error) {
        console.log(error);
      }
    };
    test();
    dispatch(setSticker({ origin: currRouter, id: sticker.id, position: stickerPosition }));
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
