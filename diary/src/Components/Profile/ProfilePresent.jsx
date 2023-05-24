import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import NavBarContainer from '../NavBar/NavBarContainer';

// 네브바는 필요 없을거 같고, input태그의 placeholder를 기존의 내용으로 저장해두면 될 것 같음.
// 초기내용은 통신을 통해서 받아와야하고, 아마두... useEffect를 사용해야할 듯? axios로 받아오자.
// 변경은 post 통신을 사용해야 할 듯.

const ProfilePresent = ({
  onChange, users,
  // passwordRegister, passwordCheckRegister,
  // isDirty, errors, handleSignup,
  postModify,
}) => (
  <>
    <NavBarContainer />
    <div className="flex h-screen justify-center items-center bg-orange-200">
      <div className="w-3/5">
        <div className="flex justify-center">
          <div className="flex flex-col gap-5 min-w-[360px] w-1/2 bg-white shadow-md p-10 rounded-lg">
            <h3 className="text-xl font-bold mb-3">회원 정보</h3>
            <form
              className="flex flex-col gap-3"
              // onSubmit={handleSignup}
            >
              <div className="flex gap-5">
                <label htmlFor="file">
                  <div
                    className="w-20 h-20 bg-cover rounded-full border border-black"
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
                <div>
                  <p className="text-sm text-gray-700">내 프로필 사진</p>
                  <input placeholder="적어보세" className="outline" />

                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span>이름</span>
                <input
                  placeholder="이름"
                  defaultValue={users?.name || ''}
                  className="border-2 border-gray-300 py-1 px-2.5 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span>email</span>
                <input
                  placeholder="email"
                  value={users?.email || ''}
                  className="border-2 border-gray-300 py-1 px-2.5 bg-gray-200 text-gray-500 rounded outline-none"
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-2">
                <span>비밀번호</span>
                <input
                  placeholder="새 비밀번호"
                  className="border-2 border-gray-300 py-1 px-2.5 rounded"
                  id="password"
                  type="password"
                  // {...passwordRegister}
                  // aria-invalid={!isDirty ? errors.password : false}
                />
                <span className="text-pink-300 text-sm px-3">
                  {/* {errors.password.invalid ? errors.password.message : ' '} */}
                </span>
                <input
                  placeholder="비밀번호 확인"
                  className="border-2 border-gray-300 py-1 px-2.5 rounded"
                  id="passwordCheck"
                  type="password"
                  // {...passwordCheckRegister}
                  // aria-invalid={!isDirty ? errors.passwordCheck : false}
                />
                <span className="text-pink-300 text-sm px-3">
                  {/* {errors.passwordCheck.invalid ? errors.passwordCheck.message : ' '} */}
                </span>
              </div>
              <Button
                content="변경내용 저장"
                className="bg-black text-white rounded-md h-12 w-full"
                onClick={() => postModify()}
              />
            </form>

          </div>
        </div>
      </div>
    </div>
  </>
);

ProfilePresent.propTypes = {
  onChange: PropTypes.func.isRequired,
  users: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  postModify: PropTypes.func.isRequired,
};

export default ProfilePresent;
