import React from 'react';
import PersonalContainer from 'src/Components/Personal/PersonalContainer';

const Personal = () => <PersonalContainer />;

export const getServerSideProps = ({ req }) => {
  if (!req.cookies.Authorization) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return { props: {} };
};

export default Personal;
