import React from 'react';
import PropTypes from 'prop-types';
import { BiChevronLeft, BiChevronRight, BiImageAdd } from 'react-icons/bi';
import StickerMakeModal from '../StickerMakeModal/StickerMakeModal';
import StickerButtonContainer from '../StickerButton/StickerButtonContainer';

/**
 *
 * @param {stickerList} array sticker를 담은 배열
 * @param {modalVisible} boolean modal 랜더링을 결정하는 state
 * @param {modalHandler} function modalVisible을 관리하는 함수
 * @param {sidebarVisible} boolean sidebar 랜더링을 결정하는 state
 * @param {sidebarHandler} function sidebarVisible을 관리하는 함수
 */

function SideBarPresent({
  stickerList,
  modalVisible,
  modalHandler,
  sidebarVisible,
  sidebarHandler,
  pageDate,
}) {
  return (
    <div className=" absolute inset-y-0">
      <div className="fixed right-0">
        {modalVisible ? <StickerMakeModal modalHandler={modalHandler} /> : null}
        <div className="flex h-screen">
          {sidebarVisible ? (
            <BiChevronRight
              className=" m-auto w-fit h-fit"
              size={40}
              onClick={sidebarHandler}
            />
          ) : (
            <BiChevronLeft
              className=" m-auto w-fit h-fit"
              size={40}
              onClick={sidebarHandler}
            />
          )}
          {sidebarVisible ? (
            <div className="overflow-auto inline-block bg-white">
              <div className=" flex justify-end mt-2 mr-2 mb-4">
                <BiImageAdd size={30} onClick={modalHandler} />
              </div>
              <div className="grid grid-cols-2">
                {stickerList.map((sticker) => (
                  <StickerButtonContainer
                    sticker={sticker}
                    pageDate={pageDate}
                    key={sticker.id}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

SideBarPresent.propTypes = {
  stickerList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    imgURL: PropTypes.string,
    positionX: PropTypes.number,
    positionY: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    selected: PropTypes.bool,
  })).isRequired,
  modalVisible: PropTypes.bool.isRequired,
  modalHandler: PropTypes.func.isRequired,
  sidebarVisible: PropTypes.bool.isRequired,
  sidebarHandler: PropTypes.func.isRequired,
  pageDate: PropTypes.string.isRequired,
};

export default SideBarPresent;
