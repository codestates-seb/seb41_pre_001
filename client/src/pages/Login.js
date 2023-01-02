import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
} from '../styles/StyledStore';
import { handleDonateMe } from '../util/alertStore';
import { regEmail } from '../util/regExp';
import { getUser, setTOKEN, setUser } from '../util/tokenHelper';
import { pushDefaultConfig, pushDefaultWithToken } from '../util/axiosHelper';
import { getUSER_USER } from '../util/urlStore';

const LoginContainer = styled.div`
  width: 316px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/**
 * Created by @KimTank
 * - 2022-12-28: 뷰잡음
 * @returns <MainWithSidebarContainer>
 */
function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const navigate = useNavigate();

  const email = 'Email';
  const password = 'Password';

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
    console.log(userEmail);
  };

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
    console.log(userPassword);
  };

  const handleLogin = () => {
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
    console.log(process.env.REACT_APP_EP_LOGIN);
    console.log('username: ' + userEmail);
    console.log('password: ' + userPassword);
    axios
      .post(
        process.env.REACT_APP_EP_LOGIN,
        {
          username: userEmail,
          password: userPassword,
        },
        pushDefaultConfig()
      )
      .then((response) => {
        setTOKEN(response.headers.authorization);
        axios
          .get(getUSER_USER(), pushDefaultWithToken())
          .then((response) => {
            const { data } = response;
            console.log(data);
            setUser(data);
            console.log(getUser());
            navigate('/');
          })
          .catch((error) => {
            console.log(error);
            let errorText;
            const { message } = error;
            const code = Number(message.slice(-3));
            switch (code) {
              case 401:
              case 404:
              case 500:
              default:
                errorText = message;
            }
            return alert(errorText);
          });
      })
      .catch((error) => {
        console.log(error);
        let errorText;
        const { message } = error;
        const code = Number(message.slice(-3));
        switch (code) {
          case 401:
            errorText = 'Wrong Email or Password, check your Email or Password';
            break;
          case 404:
          case 500:
            errorText = 'Sorry, We have problem for service. contact to us';
            break;
          default:
            errorText = message;
        }
        return alert(errorText);
      });
  };
  return (
    <MainContainer>
      <LoginContainer>
        <RandomIcon />
        <div>
          <CommonButton
            buttonType={BUTTON_TYPE_GOOGLE}
            onClick={handleDonateMe}
            cont={`Sign up with Google`}
          />
          <CommonButton
            buttonType={BUTTON_TYPE_GITHUB}
            onClick={handleDonateMe}
            cont={`Sign up with Github`}
          />
          <CommonButton
            buttonType={BUTTON_TYPE_FACEBOOK}
            onClick={handleDonateMe}
            cont={`Sign up with Facebook`}
          />
        </div>
        <InputFormContainer>
          <InputsContainer>
            <LabelInput
              label={email}
              type={'email'}
              value={userEmail}
              onChange={handleUserEmail}
            />
            <LabelInput
              label={password}
              type={'password'}
              value={userPassword}
              onChange={handleUserPassword}
            />
            <CommonButton cont={'Log in'} onClick={handleLogin} />
          </InputsContainer>
        </InputFormContainer>
        <Last>
          <LabelDescription>
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </LabelDescription>
          <LabelDescription style={{ paddingTop: '10px' }}>
            Are you an employer?{' '}
            <a href="https://careers.stackoverflow.com/employer/login">
              Sign up on Talent <RandomIcon />
            </a>
          </LabelDescription>
        </Last>
      </LoginContainer>
    </MainContainer>
  );
}

export default Login;
