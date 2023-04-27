import { useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BiDuplicate, BiX } from 'react-icons/bi';
import { addTableSticker } from './src/Redux/action';

function StickerCropper({ modalHandler }) {
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
    // 수정할 사항 : 이미지 크롭을 진행하지 않고 저장버튼을 눌렀을 때, 에러 발생
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
        <BiX onClick={modalHandler} size={36} />
      </div>
      {!inputImage ? (
        <label htmlFor="file">
          <div className=" h-[60vh] w-[65vw] mx-12 my-8 border-dashed border-4 rounded-lg">
            11111111
          </div>
          <input
            id="file"
            className="hidden"
            type="file"
            accept="image/*"
            onChange={onChange}
          />
        </label>
      ) : (
        <Cropper
          className=" h-[60vh] w-[65vw] mx-12 my-8"
          src={inputImage}
          ref={cropperRef}
        />
      )}
      <div className="m-6 ml-14">
        {!inputImage ? (
          <div className=" h-10" />
        ) : (
          <BiDuplicate size={40} onClick={getCropData} />
        )}
      </div>
    </div>
  );
}

StickerCropper.propTypes = {
  modalHandler: PropTypes.func.isRequired,
};

export default StickerCropper;
