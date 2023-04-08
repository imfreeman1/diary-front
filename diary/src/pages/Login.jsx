<<<<<<< HEAD
import { useRouter } from "next/router";
import React, { useState } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> 277a64037449c257564e923a1f33c714a4627235
import { useForm } from "react-hook-form";
import axios from "./Utils/api";

const Login = () => {
<<<<<<< HEAD
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (resData) => {
    try {
      let payload = {
        email: resData.email,
        password: resData.password,
        name: "jih",
        image: "",
        image_type: "",
      };
      await axios.post("/users/signup/", payload);
    } catch (e) {
      console.log(e);
    }
  };

  //   const onSubmit = async(data) => {
  //     console.log(data);
  //     await fetch("http://132.145.86.117:3000/users/signin", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         email: data.email,
  //         password: data.password,
  //         name: "a",
  //         image: "",
  //         image_type: "",
  //       }),
  //     })
  //       .then((res) => {
  //         console.log("res", res, res.json());
  //         const resJson = res.json();
  //         return resJson;
  //       })
  //       .then((json) => {
  //         if (json.jwt) {
  //           const newToken = json.jwt;
  //           const name = json.name;
  //           localStorage.setItem("userId", newToken);
  //           alert(`${name}님, 환영합니다!`);
  //           router.push("/Main");
  //         }
  //       });
  //   };
  const onError = (errors) => console.log(errors);

  return (
    <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white w-3/5 shadow-3xl">
        <form className="p-24" onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="flex items-center text-lg mb-8">
            <input
              type="text"
              className="bg-gray-200 pl-10 py-4 focus:outline-none w-full"
              placeholder="email"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <span>이메일을 입력해주세요</span>
            )}
          </div>
          <div className="flex items-center text-lg mb-8">
            <input
              type="password"
              className="bg-gray-200 pl-10 py-4 focus:outline-none w-full"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <span>비밀번호를 입력해주세요</span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-4 text-white w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
=======
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
>>>>>>> 277a64037449c257564e923a1f33c714a4627235
  );
};

export default Login;
