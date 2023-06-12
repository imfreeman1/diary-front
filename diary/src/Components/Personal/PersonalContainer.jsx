import React, {
  useLayoutEffect, useEffect, useRef, useState,
} from 'react';
// import { useForm } from 'react-hook-form';
import useAxios from 'src/hooks/useAxios';
// import axios from 'src/Utils/api';
import makeFormData from 'src/Utils/makeFormData';
import PersonalPresent from './PersonalPresent';
// inputImg : 이미지 들어가는 <div>
// files : 이미지 정보
// userImage : 이미지(files)를 form 데이터로 변환된 정보를 담고 있는 state

const PersonalContainer = () => {
  const [inputImg, setInputImg] = useState(null);
  const files = useRef(null);
  // const passwordRef = useRef(null);
  const imgRef = useRef(null);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { isDirty, errors },
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
    console.log(files.current);
  };

  // const passwordRegister = register('password', {
  //   required: { value: true, message: '비밀번호를 입력해주세요' },
  //   minLength: { value: 4, message: '4자리이상 입력해주세요' },
  //   maxLength: { value: 16, message: '16자리이하로 입력해주세요' },
  // });
  // const passwordCheckRegister = register('passwordCheck', {
  //   required: { value: true, message: '비밀번호를 입력해주세요' },
  //   minLength: { value: 4, message: '4자리이상 입력해주세요' },
  //   validate: {
  //     check: (passwordCheck) => passwordCheck === passwordRef.current || '비밀번호가 다릅니다',
  //   },
  // });

  const { response, operation } = useAxios();

  const GetProfileAxios = () => {
    operation({
      method: 'get',
      url: '/users/getprofile',
    });
  };
  // USP10001 email, image, info, name, password, refresh

  useEffect(() => {
    GetProfileAxios();
  }, []);

  // postModify는 image가 넘어가는지 확인용 확인하면 handleSubmit으로 post보낼 것
  const postModify = () => {
    operation({
      method: 'post',
      url: '/users/updateprofile',
      payload: makeFormData({
        image: files.current[0],
        email: response?.result.email,
        password: response?.result.password,
        name: response?.result.name,
        info: '',
      }),
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  };
  // const handleSignup = handleSubmit(async () => {
  //   try {
  //     const res = await axios.post(
  //       '/users/updateprofile',
  //       {
  //         email: response?.result.email,
  //         password: response?.result.password,
  //         name: response?.result.name,
  //         image: response?.result.image,
  //         image_type: '',
  //       },
  //       { withCredentials: true },
  //     );
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });
  return (
    <PersonalPresent
      onChange={onChange}
      users={response?.result}
  // passwordRegister={passwordRegister}
  // passwordCheckRegister={passwordCheckRegister}
  // isDirty={isDirty}
  // errors={errors}
  // handleSignup={handleSignup}
      postModify={postModify}
      imgRef={imgRef}
    />
  );
};

export default PersonalContainer;
