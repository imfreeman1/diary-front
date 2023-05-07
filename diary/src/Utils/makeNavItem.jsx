const MakeNavItemList = (yearInMonth) => {
  const currYear = new Date().getFullYear();
  const NAV_ITEM_LIST = [
    'Cover',
    yearInMonth ? `${yearInMonth}` : `${currYear}`,
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    'Weekly',
    'Daily',
    'Personal'];
  return NAV_ITEM_LIST;
};

export default MakeNavItemList;
