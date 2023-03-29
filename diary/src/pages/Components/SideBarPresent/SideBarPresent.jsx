import React from "react";
import { v4 } from "uuid";
import {
  SIDEBAR_CLOSER,
  SIDEBAR_OPENER,
  STICKER_MAKER_BUTTON_CONTENT,
} from "@/Constants/constants";
import StickerMakeModal from "../SideBar/StickerMakeModal/StickerMakeModal";
import Button from "../Button";
import SideBarColumn from "./SideBarColumn";
/*

배열을 1차원 배열로 교체해야할 듯

스티커 객체로 만들어야 될거 같은데,

{
id : String,
draggable : Boolean,

}
*/

/*
SideBarPresent에도 state를 만들어서 onclick했을때 스티커가 만들어지는 방식으로 변형해야 되지 않을까? 그럼 클릭했을때,
sticker가 생성되는 위치를 router로 결정해줘야하나??
*/
/**
 *
 * @param {stickerList} array sticker를 담은 배열
 * @param {modalVisible} boolean modal 랜더링을 결정하는 state
 * @param {modalHandler} function modalVisible을 관리하는 함수
 * @param {sidebarVisible} boolean sidebar 랜더링을 결정하는 state
 * @param {sidebarHandler} function sidebarVisible을 관리하는 함수
 * @param {tableMaker} function table형태를 만들기위해 2차원 배열을 만들어주는 함수. 추후 grid로 변경, 대체할 예정
 */
// 모달창 랜더링 관련 문제 : 모달의 호출 위치에 대한 고민. 사이드바 내부에서 호출 할 경우 모달이 랜더링 될때 사이드바가 사라짐. 딱히 문제는 아닌 것 같기도 하고.
function SideBarPresent({
  stickerList,
  modalVisible,
  modalHandler,
  sidebarVisible,
  sidebarHandler,
  tableMaker,
}) {
  return (
    <div className="fixed right-0">
      {modalVisible ? <StickerMakeModal modalHandler={modalHandler} /> : null}
      <div className="flex h-screen">
        {sidebarVisible ? (
          <Button content={SIDEBAR_CLOSER} onClick={sidebarHandler} />
        ) : (
          <Button content={SIDEBAR_OPENER} onClick={sidebarHandler} />
        )}
        {sidebarVisible ? (
          <div className="overflow-auto inline-block">
            <div className=" flex justify-end mb-4 mt-2 mr-2">
              <Button
                content={STICKER_MAKER_BUTTON_CONTENT}
                onClick={modalHandler}
              />
            </div>
            <table>
              <tbody>
                {tableMaker(stickerList, 2).map((stickerCol) => (
                  <SideBarColumn stickerCol={stickerCol} key={v4()} />
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SideBarPresent;
