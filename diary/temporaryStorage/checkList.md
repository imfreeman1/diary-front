## 해야할일 체크리스트!

#####결정시에 체크한다.

- [ ] image의 이름을 어떻게 정할 것인가..? 아직 정하지 못함.
- [ ] page_date는 어디서 어떻게 받아올 것인가?
- [ ] axios config는 따로 상수로 빼둘까?
- [ ] formData 만들 때 쓰는 object도 상수로?
- [x] sticker update와 remove는 StickerContainer에서 통신하자.
- update의 경우, useEffect안에서 실행하면 될거 같음. position과 size에 deps를 준다.
- remove는 삭제버튼을 트리거로 작동하도록 하자.
- [ ] 스티커가 날짜별로 뜨게하려면 어떻게 해야할까? 이것도 고민해보자.
- [ ] 스티커 state가 변경되어야 할 것 같은데 어쩌지. 따로 관리하는게 훨씬 좋을 것 같은데, tree구조 같은 느낌으로?
      ex) stickers.Monthly.05 = Array 이런?
