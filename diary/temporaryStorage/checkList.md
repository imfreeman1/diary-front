## 해야할일 체크리스트!

#####결정시에 체크한다.

- [ ] image의 이름을 어떻게 정할 것인가..? 아직 정하지 못함.
- [ ] page_date는 어디서 어떻게 받아올 것인가?
- [ ] axios config는 따로 상수로 빼둘까?
- [ ] formData 만들 때 쓰는 object도 상수로?
- [ ] 스티커가 날짜별로 뜨게하려면 어떻게 해야할까? 이것도 고민해보자.
- [ ] 스티커 state가 변경되어야 할 것 같은데 어쩌지. 따로 관리하는게 훨씬 좋을 것 같은데, tree구조 같은 느낌으로?
      ex) stickers.Monthly.05 = Array 이런?
- [ ] sticker drag를 할 때, debounce를 사용하면, 스티커를 놓았다가 다시 움직이는 경우, 처음 위치로 돌아가서 재시작을 하게 됨.......!
- [ ] sticker create와 remove에서 throttle을 사용해야 할거 같음.
- [ ] monthly에 달 이동 버튼도 throttle이 필요할 듯.
- [ ] router를 확인해서, 스티커 내용을 get통신으로 가져와야 하는데, navButton에서 진행해야 할 것 같고,

##### 결정한 것

- [x] sticker update와 remove는 StickerContainer에서 통신하자.
- update의 경우, useEffect안에서 실행하면 될거 같음. position과 size에 deps를 준다.
- remove는 삭제버튼을 트리거로 작동하도록 하자.

##### 현재 문제점

- [ ] 스티커 업데이트 시 맨 마지막에 움직인 스티ㅓ만 업데이트 통신이 보내짐.
- [ ] 스티커 get 통신을 한 후에 업데이트 통신이 한번 더 발생함.
- [ ] get 통신을 5월 10일에 보내는데 5월 1일 스티커만 받아와짐.
