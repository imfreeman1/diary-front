import { useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import { addTableSticker } from '@/Redux/action';

function EasyCropper({ modalHandler }) {
  const dispatch = useDispatch();
  const cropperRef = useRef(null);
  // 유저가 첨부한 이미지
  const [inputImage, setInputImage] = useState(null);
  // 유저가 선택한 영역만큼 크롭된 이미지

  // input이 들어왔을때, file을 읽음.
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setInputImage(reader.result);
    };
    if (files.length) {
      reader.readAsDataURL(files[0]);
    }
  };
  const getCropData = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    if (typeof cropper !== 'undefined') {
      const stickerURL = cropper.getCroppedCanvas().toDataURL();
      const stickerSize = {width:cropper.cropBoxData.width, height:cropper.cropBoxData.height};
      dispatch(addTableSticker({ url: stickerURL, size:stickerSize }));
      modalHandler();
    }
  };
  return (
    <div>
      <div className="flex justify-end mt-3 mr-3">
        <Button content="X" onClick={() => modalHandler()} />
      </div>

      <input type="file" accept="image/*" onChange={onChange} />
      <Cropper className=" h-[60vh] w-[65vw] mx-12 my-8" src={inputImage} ref={cropperRef} />
      <Button onClick={getCropData} content="저장" />
    </div>
  );
}

export default EasyCropper;
