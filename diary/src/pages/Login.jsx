import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "./Utils/api";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(async (resData) => {
        try {
          let payload = {
            email: resData.email,
            password: resData.password,
            name: "jih",
          };
          await axios.post("/users/signup/", payload);
        } catch (e) {
          console.log(e);
        }
      })}
    >
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        placeholder="test@email.com"
        {...register("email")}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="****************"
        {...register("password")}
      />
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
};

export default Login;
