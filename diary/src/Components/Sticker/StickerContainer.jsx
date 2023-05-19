import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import useDraggable from 'src/hooks/useDraggable';
import useResizable from 'src/hooks/useResizable';
import { removeSticker, resetSelect, setSelect } from 'src/Redux/action';
import {
  CURRENT_ROUTER_PATH,
  STICKER_IMG_SIZE_OBJECT,
  STICKER_POSITION_TRANSLATOR,
} from 'src/Constants/constants';
import debounce from 'src/Utils/debounce';
import utilAxios from 'src/Utils/utilAxios';
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
  imgURL, id, position, width, height, selected,
}) {
  useDraggable(position);
  // resize를 할때, 왼쪽 축을 잡고 늘리면 오른쪽으로 늘어나는 문제가 있음.
  useResizable(position);
  const dispatch = useDispatch();
  const routerRef = useRef(null);
  /* CURRENT_ROUTER_PATH function을 dispatch안에서 실행시킬경우
  react의 hook 규칙을 위반하게 되어 Ref의 current에 저장해서 사용하는 방식을 채택.
  더 좋은 방법이 있다면 수정할 예정. */
  routerRef.current = CURRENT_ROUTER_PATH();
  const focusRef = useRef(null);
  // hook으로 빼낼 수 있겠네.
  // onClick했을때 focus가 옮겨가야하는데, 어떻게 구현해야할지 더 고민해볼 것.
  useEffect(() => {
    const stickerData = {
      id,
      position: [position.positionX, position.positionY],
      size: [height, width],
      page_type: routerRef.current?.toLowerCase(),
    };
    const updateStickerOptions = {
      url: '/sticker/update',
      method: 'post',
      data: stickerData,
    };
    // update는 componentUnDidMount에서 실행하는 하는 것도 괜찮을거 같음.
    // 현재 마지막 남은 스티커를 삭제 할 경우 debounce에서 에러가 발생.
    const updateSticker = () => utilAxios(updateStickerOptions);
    debounce(2000, updateSticker);
    const stickerPosition = focusRef.current;
    stickerPosition.style.transform = STICKER_POSITION_TRANSLATOR(position);
    const stickerImgSize = stickerPosition.firstChild;
    Object.assign(stickerImgSize.style, STICKER_IMG_SIZE_OBJECT(width, height));

    return () => clearTimeout(debounce(updateSticker));
  }, [position, height, width, id]);

  const focusHandler = () => {
    console.log(focusRef.current);
    const selectedStickerId = focusRef.current.id;
    dispatch(setSelect({ id: selectedStickerId, origin: routerRef.current }));
  };

  const removeStickerHandler = async () => {
    try {
      const removeStickerOptions = {
        url: '/sticker/delete',
        method: 'post',
        data: { id },
        getReturn: true,
      };
      await utilAxios(removeStickerOptions);
      dispatch(
        removeSticker({ id, origin: routerRef.current }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  // onBlur event를 사용할 때에는 tabIndex속성을 같이 사용해줘야 onBlur가 트리거 됨.
  // 참고 https://velog.io/@broccoliindb/onBlur-on-react
  const blurHandler = (e) => {
    const nextElem = e.relatedTarget;
    // 문제가 생기기 전까지는 보류.
    if (!nextElem) {
      dispatch(resetSelect({ origin: routerRef.current }));
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
};

export default StickerContainer;
