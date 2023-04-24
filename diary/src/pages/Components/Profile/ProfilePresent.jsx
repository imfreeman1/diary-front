import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import NavBarContainer from '../NavBar/NavBarContainer';

// 네브바는 필요 없을거 같고, input태그의 placeholder를 기존의 내용으로 저장해두면 될 것 같음.
// 초기내용은 통신을 통해서 받아와야하고, 아마두... useEffect를 사용해야할 듯? axios로 받아오자.
// 변경은 post 통신을 사용해야 할 듯.

const ProfilePresent = ({ onChange }) => (
  <>
    <NavBarContainer />
    <div className="flex h-screen justify-center items-center bg-orange-200">
      <div className="h-[580px] w-3/5">
        <div className="relative flex justify-center">
          <div className="w-1/2 bg-white shadow-md p-10 rounded-lg">
            <div className="flex justify-between">
              <h3 className="text-xl font-bold mb-3">회원 정보</h3>
              <Button content="나가기" className="h-fit" />
            </div>
            <form className="flex flex-col gap-3">
              <div className="h-20">
                <label htmlFor="file">
                  <div
                    className=" w-20 h-20 bg-cover rounded-full border border-black"
                    id="imageDisplay"
                  />
                  <input
                    className="hidden"
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={(e) => onChange(e)}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <span>email</span>
                <input placeholder="email" />
              </div>
              <div className="flex flex-col gap-2">
                <span>password</span>
                <input placeholder="********" />
              </div>
              <div className="flex flex-col gap-2">
                <span>이름</span>
                <input placeholder="이름" />
              </div>
              <Button
                content="변경내용 저장"
                className="bg-black text-white rounded-md h-12 w-full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
);

ProfilePresent.propTypes = {};

export default ProfilePresent;
