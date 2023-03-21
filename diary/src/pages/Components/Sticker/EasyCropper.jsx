import { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useDispatch } from "react-redux";
import Button from "../Button";
import { addTableSticker } from "@/Redux/action";
import {
  STICKER_CLOSE_BUTTON_CONTENT,
  STICKER_SAVE_BUTTON_CONTENT,
} from "@/constants/constants";

function EasyCropper({ modalHandler }) {
  const dispatch = useDispatch();
  const cropperRef = useRef(null);
  // 유저가 첨부한 이미지
  const [inputImage, setInputImage] = useState(null);
  // 유저가 선택한 영역만큼 크롭된 이미지
  const files = useRef(null);

  // input이 들어왔을때, file을 읽음.
  const onChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.dataTransfer) {
      files.current = e.dataTransfer.files;
    } else if (e.target) {
      files.current = e.target.files;
    }
    reader.onload = () => {
      setInputImage(reader.result);
    };
    if (files.current.length) reader.readAsDataURL(files.current[0]);
  };
  const getCropData = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    if (cropper) {
      const stickerURL = cropper.getCroppedCanvas().toDataURL();
      const stickerSize = {
        width: cropper.cropBoxData.width,
        height: cropper.cropBoxData.height,
      };
      dispatch(addTableSticker({ imgURL: stickerURL, size: stickerSize }));
      modalHandler();
    }
  };
  return (
    <div>
      <div className="flex justify-end mt-3 mr-3">
        <Button content={STICKER_CLOSE_BUTTON_CONTENT} onClick={modalHandler} />
      </div>
      <input type="file" accept="image/*" onChange={onChange} />
      <Cropper
        className=" h-[60vh] w-[65vw] mx-12 my-8"
        src={inputImage}
        ref={cropperRef}
      />
      <Button onClick={getCropData} content={STICKER_SAVE_BUTTON_CONTENT} />
    </div>
  );
}

export default EasyCropper;
