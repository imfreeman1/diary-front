import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import useDraggable from '@/pages/hooks/useDraggable';
import useResizable from '@/pages/hooks/useResizable';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { removeSticker, resetSelect, setSelect } from '@/Redux/action';

/* 
현재 에러 사항
  - 스티커 A와 B가 있을 때, 스티커 A가 focus된 상태에서 스티커 B를 drag하면 에러 발생.
    undefined는 left property를 가질 수 없다는 에러인데, event가 잡히지 않는 것으로 생각 됨.

  - onBlur로 focus를 관리 중 일때 발생하는 문제로, 스티커 삭제 버튼을 눌렀을 때, onBlur가 실행되는 문제.
    div내부 다른 곳을 클릭하는 것에는 문제가 없으나, 버튼의 기능이 활성화 될 때, focus가 버튼으로 넘어가서 그렇게 되는 것으로 생각 됨.
 */
/**
 * 
 * @param {url} string
 * @param {id} string
 * @param {position} string
 * @param {width} string
 * @param {height} string
 * @param {selected} string
 * @returns 뭔데요?
 */
function Sticker({
  url, id, position, width, height, selected
}) {
  useDraggable(position);
  // resize를 할때, 왼쪽 축을 잡고 늘리면 오른쪽으로 늘어나는 문제가 있음.
  useResizable();
  const dispatch = useDispatch();
  const currRouter = useRouter().pathname.replace('/','');
  const focusRef = useRef(null);

  useEffect(() => {
    if (selected) focusRef.current.focus();
  }, [selected])

  useEffect(() => {
    const stickerPosition = document.querySelector(`[id="${id}"]`);
    stickerPosition.style.transform = `translate(${position[0]}px, ${position[1]}px)`;
    const stickerImgSize = stickerPosition.querySelector('img');
    Object.assign(stickerImgSize.style, {
      width: `${width}px`,
      height: `${height}px`
    })
  }, []);

  const focusHandler = (e) => {
    const selectedStickerId = e.target.id;
    // if (selected && selectedStickerId===id) return; // 이 조건문을 건 이유 : 처음에 온클릭으로 해서
    dispatch(setSelect({id:selectedStickerId,origin:currRouter}))
  };

  const removeStickerHandler = (e) => {
    const selectedStickerId = e.target.parentNode.parentNode.id;
    dispatch(removeSticker({id:selectedStickerId, origin:currRouter}))
  }

  // onBlur event를 사용할 때에는 tabIndex속성을 같이 사용해줘야 onBlur가 트리거 됨.
  // 참고 https://velog.io/@broccoliindb/onBlur-on-react
  const blurHandler = (e) => {
    const nextElem = e.relatedTarget;
    // 문제가 생기기 전까지는 보류.
    if (!nextElem) {
      dispatch(resetSelect({origin:currRouter}))
    }
  }


  return (
    <div className={` absolute draggable`} id={id} ref={focusRef}
    tabIndex={0}
    onBlur={selected?blurHandler:null}>
      {selected?
      <div className='flex justify-end m-1'>
        <Button className="p-1" onClick={(e)=>removeStickerHandler(e)} content="X" />
      </div>
       : null}
      <img
        onDoubleClick={(e) => focusHandler(e)}
        className={`${selected?'resizable ring':null} object-fill`}
        src={url}
        width={width}
        height={height}
        id={id}
        alt="스티커"
      />
    </div>
  );
}

export default Sticker;
