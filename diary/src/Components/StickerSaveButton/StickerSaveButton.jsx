import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiSave } from 'react-icons/bi';
import useAxios from 'src/hooks/useAxios';
import { resetUpdate } from 'src/Redux/action';
import { UPDATE_STICKER_OPTIONS } from 'src/Constants/stickerConstant';
import Button from '../Button/Button';

const StickerSaveButton = () => {
  const updateStickers = useSelector(
    ({ stickerReducer }) => stickerReducer.stickersObj.updateStickers,
  );
  const dispatch = useDispatch();
  const { operation } = useAxios();

  const onClick = () => {
    operation(UPDATE_STICKER_OPTIONS(updateStickers));
    dispatch(resetUpdate());
  };
  return (
    <Button content={<BiSave className="m-auto hover:text-gray-500 duration-200" size={30} />} className="bg-gray-500 w-10 h-10 my-auto rounded-md text-white justify-center hover:bg-white hover:border-gray-500 hover:border duration-200" onClick={onClick} />
  );
};

export default StickerSaveButton;
