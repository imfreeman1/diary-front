/* eslint-disable consistent-return */
const selectedItemChecker = (router, month, navContent) => {
  let bool = false;
  switch (router) {
    case navContent:
      bool = true;
      return bool;
    case 'Profile':
      if (navContent === 'Personal') return true;
      break;
    case 'Monthly':
      if (navContent === `${month + 1}`) return true;
      break;
    default:
      return bool;
  }
};

export default selectedItemChecker;
