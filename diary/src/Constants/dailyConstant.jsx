export const DAILY_CONST = {
  LOGO: 'Daily',
  TITLE: 'Title',
  MARK: (date) => `D-${date}`,
};

// export const DAILY_TITLE = 'Title';
export const GET_DAILY_DIARY_OPT = (date) => {
  if (!date) throw new Error('date is not defined');
  return ({
    method: 'get',
    url: `/daily/read/${date}`,
  });
};
export const POST_DAILY_WRITE_OPT = (dailyInfo) => ({
  method: 'post',
  url: '/daily/write/',
  payload: {
    title: dailyInfo.titleText,
    content: dailyInfo.editorContent,
    date: dailyInfo.locdate,
  },
});

export const POST_DAILY_UPDATE_OPT = (dailyInfo) => ({
  method: 'post',
  url: '/daily/update',
  payload: {
    title: dailyInfo.titleText,
    content: dailyInfo.editorContent,
    date: dailyInfo.locdate,
  },
});
