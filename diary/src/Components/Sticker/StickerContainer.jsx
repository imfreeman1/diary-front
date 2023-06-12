import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import useDraggable from 'src/hooks/useDraggable';
import useResizable from 'src/hooks/useResizable';
import { removeSticker, resetSelect, setSelect } from 'src/Redux/action';
import { CURRENT_ROUTER_PATH } from 'src/Constants/constants';
import debounce from 'src/Utils/debounce';
import utilAxios from 'src/Utils/utilAxios';
import {
  REMOVE_STICKER_OPTIONS, STICKER_CONST, STICKER_DATA, UPDATE_STICKER_OPTIONS,
} from 'src/Constants/stickerConstant';
import useAxios from 'src/hooks/useAxios';
import StickerPresent from './StickerPresent';

/*
현재 에러 사항
  - 스티커 A와 B가 있을 때, 스티커 A가 focus된 상태에서 스티커 B를 drag하면 에러 발생.
    undefined는 left property를 가질 수 없다는 에러인데, event가 잡히지 않는 것으로 생각 됨.
  - onBlur로 focus를 관리 중 일때 발생하는 문제로, 스티커 삭제 버튼을 눌렀을 때, onBlur가 실행되는 문제.
    div내부 다른 곳을 클릭하는 것에는 문제가 없으나, 버튼의 기능이 활성화 될 때, focus가 버튼으로 넘어가서 그렇게 되는 것으로 생각 됨.
 */
/**
 *
 * @param {imgURL} string
 * @param {id} string
 * @param {position} array
 * @param {width} string
 * @param {height} string
 * @param {selected} boolean
 */
function StickerContainer({
  imgURL,
  id,
  position,
  width,
  height,
  selected,
  pageDate,
}) {
  const routerRef = CURRENT_ROUTER_PATH();
  const focusRef = useRef(null);
  // resize를 할때, 왼쪽 축을 잡고 늘리면 오른쪽으로 늘어나는 문제가 있음.
  const dispatch = useDispatch();
  // onClick했을때 focus가 옮겨가야하는데, 어떻게 구현해야할지 더 고민해볼 것.
  useDraggable(position, pageDate);
  useResizable(pageDate, focusRef, id);
  const { operation } = useAxios();
  useEffect(() => {
    const stickerPosition = focusRef.current;

    const stickerData = STICKER_DATA(id, position, height, width, routerRef);
    const updateStickerOptions = UPDATE_STICKER_OPTIONS(stickerData);
    // update는 componentUnDidMount에서 실행하는 하는 것도 괜찮을거 같음.
    // 현재 마지막 남은 스티커를 삭제 할 경우 debounce에서 에러가 발생.
    const updateSticker = () => operation(updateStickerOptions);
    debounce(2000, updateSticker);
    stickerPosition.style.transform = STICKER_CONST.POSITION_TRANSLATOR(position);
    const stickerImgSize = stickerPosition.firstChild;
    Object.assign(
      stickerImgSize.style,
      STICKER_CONST.IMG_SIZE_OBJECT(width, height),
    );

    return () => clearTimeout(debounce(updateSticker));
  }, [position, height, width, id]);

  const focusHandler = () => {
    const selectedStickerId = focusRef.current.id;
    dispatch(setSelect({ id: selectedStickerId, origin: routerRef, pageDate }));
  };

  const removeStickerHandler = async () => {
    try {
      operation(REMOVE_STICKER_OPTIONS({ id }));
      dispatch(removeSticker({ id, origin: routerRef, pageDate }));
    } catch (error) {
      throw new Error(error);
    }
  };

  // onBlur event를 사용할 때에는 tabIndex속성을 같이 사용해줘야 onBlur가 트리거 됨.
  // 참고 https://velog.io/@broccoliindb/onBlur-on-react
  const blurHandler = (e) => {
    const nextElem = e.relatedTarget;
    // 문제가 생기기 전까지는 보류.
    if (!nextElem) {
      dispatch(resetSelect({ origin: routerRef, pageDate }));
    }
  };

  return (
    <StickerPresent
      id={id}
      imgURL={imgURL}
      position={position}
      width={width}
      height={height}
      selected={selected}
      focusRef={focusRef}
      focusHandler={focusHandler}
      removeStickerHandler={removeStickerHandler}
      blurHandler={blurHandler}
    />
  );
}

StickerContainer.propTypes = {
  id: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  position: PropTypes.objectOf(PropTypes.number).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  pageDate: PropTypes.string.isRequired,
};

export default StickerContainer;
