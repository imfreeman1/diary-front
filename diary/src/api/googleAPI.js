// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const getInfo = (token, setFunc) => {
  axios
    .get(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${token}`,
      {
        headers: {
          authorization: `Bearer${token}`,
        },
      },
    )
    .then((res) => {
      setFunc(res.data);
    })
    .catch((err) => console.log(err));
};

export default getInfo;
