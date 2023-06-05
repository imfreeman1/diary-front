import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_ROUTER_PATH } from 'src/Constants/constants';
import { getStickers } from 'src/Redux/action';
import { GET_STICKER_OPTIONS } from 'src/Constants/stickerConstant';
import useAxios from 'src/hooks/useAxios';
import StickerContainer from '../Sticker/StickerContainer';

const StickerDisplay = ({ pageDate }) => {
  const dispatch = useDispatch();
  const currRouter = CURRENT_ROUTER_PATH();
  const { operation, response } = useAxios();
  useMemo(() => operation, [operation]);
  const stickerList = useSelector(
    (state) => state.stickerReducer.stickersObj,
  );
  useEffect(() => {
    const getStickerOptions = GET_STICKER_OPTIONS(currRouter, pageDate);
    operation(getStickerOptions);
  }, [currRouter, pageDate, operation]);

  useEffect(() => {
    if (response?.code
        === 'STKR10001') {
      dispatch(getStickers({
        origin: currRouter,
        getStickerArray: response.result,
        pageDate,
      }));
    }
  }, [dispatch, response]);

  return (
    <>
      <div className="hidden">스티커</div>
      {stickerList[currRouter][pageDate]?.map((sticker) => (
        <StickerContainer
          imgURL={sticker.imgURL}
          key={sticker.id}
          id={sticker.id}
          position={{
            positionX: sticker.positionX,
            positionY: sticker.positionY,
          }}
          width={sticker.width}
          height={sticker.height}
          selected={sticker.selected}
          pageDate={pageDate}
        />
      ))}
    </>
  );
};

StickerDisplay.propTypes = {
  pageDate: PropTypes.string.isRequired,
};

export default StickerDisplay;
