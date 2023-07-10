import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Landing from './Landing';
import Cover from './Cover';
// import { googleLogout } from '@react-oauth/google';

export default function Home() {
  const [cookies] = useCookies(['user_id']);
  console.log('token', cookies);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return <div>{cookies ? <Cover /> : <Landing />}</div>;
}
