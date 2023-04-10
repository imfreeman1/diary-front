import React from "react";
import { useForm } from "react-hook-form";
import SignupPresent from "./SignupPresent";
import axios from "@/pages/Utils/api";

const SignupContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const onSubmit = async (resData) => {
    try {
      let payload = {
        email: resData.email,
        password: resData.password,
        name: resData.name,
        image: "",
        image_type: "",
      };
      await axios.post("/users/signup", payload);
      await alert("회원가입 완료");
    } catch (e) {
      console.log(e);
    }
  };
  const Regex = { email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g };
  const emailRegister = register("email", {
    required: { value: true, message: "이메일을 입력해주세요" },
    pattern: { value: Regex.email, message: "이메일 형식을 입력해주세요" },
  });
  //isDirty를 사용해야 내가 입력한 값이 몇 자리인지 알 수 있을 것 같은데?
  const passwordRegister = register("password", {
    required: { value: true, message: "비밀번호를 입력해주세요" },
    minLength: { value: 4, message: "4자리이상 입력해주세요" },
    maxLength: { value: 16, message: "16자리이하로 입력해주세요" },
  });
  const nameRegister = register("name", {
    required: { value: true, message: "이름을 입력해주세요" },
  });
  console.log(errors);

  return (
    <SignupPresent
      emailRegister={emailRegister}
      passwordRegister={passwordRegister}
      nameRegister={nameRegister}
      isDirty={isDirty}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
};

export default SignupContainer;
