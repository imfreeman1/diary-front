import React from 'react';
import Landing from './Landing';
// import { googleLogout } from '@react-oauth/google';

export default function Home() {
  return <Landing />;
}

export const getServerSideProps = ({ req }) => {
  if (req.cookies.Authorization) {
    return {
      redirect: {
        destination: '/Cover',
        permanent: false,
      },
    };
  }
  return { props: {} };
};
