/* eslint-disable consistent-return */
const urlToFile = async (imgURL, dataType) => {
  try {
    let imgBlob = await fetch(imgURL);
    imgBlob = await imgBlob.blob();
    const imgFile = new File([imgBlob], dataType, { type: imgBlob.type });
    return imgFile;
  } catch (error) {
    console.log(error);
  }
};

export default urlToFile;
