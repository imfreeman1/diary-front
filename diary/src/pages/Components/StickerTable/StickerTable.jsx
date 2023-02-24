import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import StickerColumn from './StickerColumn';
import Button from '../Button';
import StickerMakeModal from './StickerMakeModal';
/*

배열을 1차원 배열로 교체해야할 듯

스티커 객체로 만들어야 될거 같은데,

{
id : String,
draggable : Boolean,

}
*/

/*
stickertable에도 state를 만들어서 onclick했을때 스티커가 만들어지는 방식으로 변형해야 되지 않을까? 그럼 클릭했을때,
sticker가 생성되는 위치를 router로 결정해줘야하나??
*/
function StickerTable() {
  const stickerList = useSelector((state) => state.stickerReducer.sticker.Table);
  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  // useEffect(() => {
  //   dispatch(setInit({ data: exStickers, ref: 'Table' }));
  // }, []);

  const modalHandler = () => {
    setModalVisible(!modalVisible);
  };

  const sidebarHandler = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const tableMaker = (arr, num) => {
    let slicedArr = [];
    const arrBox = [];
    for (let i = 0; i < arr.length; i += num) {
      slicedArr = arr.slice(i, i + num);
      arrBox.push(slicedArr);
    }
    return arrBox;
  };
  return (
    <>
      {modalVisible ? <StickerMakeModal modalHandler={modalHandler} /> : null}
      <div className="flex justify-end h-screen">
        <Button content="숨김" onClick={sidebarHandler} />
        {sidebarVisible ? (
          <div className=" border-black border-2 overflow-hidden inline-block mt-12">
            <div className=" flex justify-end mb-4 mt-2 mr-2">
              <Button content="스티커 만들기" onClick={modalHandler} />
            </div>
            <table>
              <tbody>
                {tableMaker(stickerList, 2).map((val) => <StickerColumn tableList={val} key={uuidv4()} />)}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </>

  );
}

export default StickerTable;
