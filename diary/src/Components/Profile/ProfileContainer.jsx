import React, { useLayoutEffect, useRef, useState } from 'react';
// import { useForm } from 'react-hook-form';
import ProfilePresent from './ProfilePresent';

const ProfileContainer = () => {
  const [inputImg, setInputImg] = useState(null);
  const files = useRef(null);
  const imgRef = useRef(null);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { isSubmitting },
  // } = useForm();

  useLayoutEffect(() => {
    const imgTag = imgRef.current;
    imgTag.style = `background-image: url(${inputImg || '/Logo/pen.svg'})`;
  }, [inputImg]);
  const onChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.dataTransfer) {
      files.current = e.dataTransfer.files;
    } else if (e.target) {
      files.current = e.target.files;
    }
    reader.onload = () => {
      setInputImg(reader.result);
    };
    if (files.current.length) reader.readAsDataURL(files.current[0]);
  };

  return <ProfilePresent onChange={onChange} imgRef={imgRef} />;
};

export default ProfileContainer;
