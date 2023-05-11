/* eslint-disable consistent-return */
const selectedItemChecker = (router, month, navContent) => {
  switch (router) {
    case navContent:
      return true;
    case 'Profile':
      if (navContent === 'Personal') return true;
      break;
    case 'Monthly':
      if (navContent === `${month + 1}`) return true;
      break;
    default:
      return false;
  }
};

export default selectedItemChecker;
