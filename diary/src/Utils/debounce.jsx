// dispatch를 debounce 내에서 사용하고 싶다면 콜백함수로 감싸준 다음에 넣어주면 됩니다.

let timer;
const debounce = (time, callBack) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    callBack();
  }, time);
};

export default debounce;
