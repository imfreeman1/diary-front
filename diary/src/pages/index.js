import React, { useEffect } from "react";
import Landing from "./Landing";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import Main from "./Main";

// import { googleLogout } from '@react-oauth/google';

export default function Home() {
  const [{ token }] = useCookies(["token"]);
  // const userInfo = useSelector((state) => state);
  // useEffect(() => {
  //   console.log(token);
  // }, []);

  return <>{token ? <Main /> : <Landing />}</>;
}
