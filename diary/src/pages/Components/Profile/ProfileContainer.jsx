import React, { useEffect } from "react";
import ProfilePresent from "./ProfilePresent";
import { useForm } from "react-hook-form";

const ProfileContainer = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { isSubmitting },
  //} = useForm();
  useEffect(() => {
    const imgTag = document.querySelector("#imageDisplay");
    imgTag.style = "background-image: url(/Logo/pen.svg)";
  }, []);
  return <ProfilePresent />;
};

export default ProfileContainer;
