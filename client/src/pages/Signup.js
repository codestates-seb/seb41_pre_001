import styled from 'styled-components';
import axios from 'axios';
import Capcha from '../components/Capcha';
import CommonButton, {
  BUTTON_TYPE_FACEBOOK,
  BUTTON_TYPE_GITHUB,
  BUTTON_TYPE_GOOGLE,
} from '../components/CommonButton';
import LabelInput from '../components/LabelInput';
import RandomIcon from '../components/RandomIcon';
import {
  InputFormContainer,
  InputsContainer,
  LabelDescription,
  Last,
  MainContainer,
  RightContainer,
  RowDiv,
} from '../styles/StyledStore';
import { faker } from '@faker-js/faker';
import { handleDonateMe } from '../util/alertStore';
import { useState } from 'react';
import { regDisplayName, regEmail } from '../util/regExp';

const LeftContainer = styled.div`
  width: 470px;
  margin: 0px 48px 128px 0px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RTitle = styled.p`
  padding-bottom: 32px;
  font-size: 27px;
`;
const Rul = styled.ul`
  font-size: 15px;
`;

const Rli = styled.li`
  padding-bottom: 24px;
`;

const Rdescription = styled.p`
  font-size: 13px;
`;

/**
 * Created by @KimTank
 * @param { cont }
 * @returns <RowDiv>
 */
function RCont({ cont }) {
  return (
    <RowDiv>
      <RandomIcon />
      <span>{cont}</span>
    </RowDiv>
  );
}

const Description = styled.p`
  color: #6a737c;
  font-size: 12px;
  padding: 0px 8px;
`;

const Desc = styled(LabelDescription)`
  padding-top: 24px;
`;

/**
 * Created by @KimTank
 * - 221228: 뷰 완성
 * @returns <MainContainer>
 */
function Signup() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isCapchaChecked, setCapchaChecked] = useState(false);

  const name = 'Display name';
  const email = 'Email';
  const password = 'Password';

  const handleName = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    console.log(e.target.value);
    setUserEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setUserPassword(e.target.value);
  };

  const handleChecked = () => {
    setCapchaChecked(true);
    return false;
  };

  const handleSignup = () => {
    if (!isCapchaChecked) {
      alert('reCAPTCHA is not checked');
      return false;
    }
    if (userName.length === 0) {
      alert('DisplayName is empty');
      return false;
    }
    if (userName.length < 3 || userName.length > 20) {
      alert('DisplayName is over 4 letters, under 20 letters');
      return false;
    }
    if (!regDisplayName.test(userName)) {
      alert('DisplayName is allowed by English or number');
      return false;
    }
    if (userEmail.length === 0) {
      alert('Email is empty');
      return false;
    }
    if (!regEmail.test(userEmail)) {
      alert('Email is not valid');
      return false;
    }
    if (userPassword.length === 0) {
      alert('Password is empty');
      return false;
    }
    //TODO 비밀번호 검증
    // if (!regPassword.test(userPassword)) {
    //   alert('Over 8 letters, contain over 1 English, contain over 1 number');
    //   return false;
    // }
    console.log(
      process.env.REACT_APP_PROTOCOL +
        process.env.REACT_APP_HOST +
        process.env.REACT_APP_PORT +
        process.env.REACT_APP_EP_SIGNUP
    );
    console.log('name: ' + userName);
    console.log('email: ' + userEmail);
    console.log('passwd: ' + userPassword);
    axios
      .post(
        process.env.REACT_APP_EP_SIGNUP,
        {
          userName: userName,
          userEmail: userEmail,
          userPassword: userPassword,
          userImageUrl: faker.image.avatar(),
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        const { data } = response;
        alert(data);
      })
      .catch((error) => alert(error));
  };

  return (
    <MainContainer>
      <LeftContainer>
        <RTitle>Join the Stack Overflow community</RTitle>
        <Rul>
          <Rli>
            <RCont cont={'Get unstuck — ask a question'} />
          </Rli>
          <Rli>
            <RCont cont={' Unlock new privileges like voting and commenting'} />
          </Rli>
          <Rli>
            <RCont cont={' Save your favorite tags, filters, and jobs'} />
          </Rli>
          <Rli>
            <RCont cont={' Earn reputation and badges'} />
          </Rli>
        </Rul>
        <Rdescription>
          Collaborate and share knowledge with a private group for FREE.
        </Rdescription>
        <Rdescription>
          <a href="https://stackoverflow.com/teams?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
            Get Stack Overflow for Teams free for up to 50 users.
          </a>
        </Rdescription>
      </LeftContainer>
      <RightContainer>
        <div>
          <CommonButton
            onClick={handleDonateMe}
            buttonType={BUTTON_TYPE_GOOGLE}
            cont={`Sign up with Google`}
          />
          <CommonButton
            onClick={handleDonateMe}
            buttonType={BUTTON_TYPE_GITHUB}
            cont={`Sign up with Github`}
          />
          <CommonButton
            onClick={handleDonateMe}
            buttonType={BUTTON_TYPE_FACEBOOK}
            cont={`Sign up with Facebook`}
          />
        </div>
        <InputFormContainer>
          <InputsContainer>
            <LabelInput
              label={name}
              type={'text'}
              value={userName}
              onChange={handleName}
            />
            <LabelInput
              label={email}
              type={'email'}
              value={userEmail}
              onChange={handleEmail}
            />
            <LabelInput
              label={password}
              type={'password'}
              value={userPassword}
              onChange={handlePassword}
            />
            <Description>{`Passwords must contain at least eight characters, including at least 1 letter and 1 number.}`}</Description>
            <Capcha isChecked={isCapchaChecked} onClick={handleChecked} />
            <RowDiv>
              <div>
                <input id="description" type={'checkbox'} />
              </div>
              <div>
                <LabelDescription htmlFor="description">
                  {`Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.`}
                </LabelDescription>
              </div>
              <div>
                <RandomIcon />
              </div>
            </RowDiv>
            <CommonButton cont={'Sign up'} onClick={handleSignup} />
            <Desc>
              {`By clicking “Sign up”, you agree to our `}
              <a href="https://stackoverflow.com/legal/terms-of-service/public">
                terms of service
              </a>
              {`, `}
              <a href="https://stackoverflow.com/legal/privacy-policy">
                privacy policy
              </a>
              {` and `}
              <a href="https://stackoverflow.com/legal/cookie-policy">
                cookie policy
              </a>
            </Desc>
          </InputsContainer>
        </InputFormContainer>
        <Last>
          <LabelDescription>
            Already have an account?{' '}
            <a href="https://stackoverflow.com/users/login?ssrc=head">Log in</a>
          </LabelDescription>
          <LabelDescription style={{ paddingTop: '10px' }}>
            Are you an employer?{' '}
            <a href="https://careers.stackoverflow.com/employer/login">
              Sign up on Talent <RandomIcon />
            </a>
          </LabelDescription>
        </Last>
      </RightContainer>
    </MainContainer>
  );
}

export default Signup;
