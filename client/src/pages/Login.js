import { Link } from 'react-router-dom';
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
} from '../styles/StyledStore';

const LoginContainer = styled.div`
  width: 316px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Login() {
  const email = 'Email';
  const password = 'Password';
  return (
    <section className="withSidebar">
      <LoginContainer>
        <RandomIcon />
        <div>
          <CommonButton
            buttonType={BUTTON_TYPE_GOOGLE}
            cont={`Sign up with Google`}
          />
          <CommonButton
            buttonType={BUTTON_TYPE_GITHUB}
            cont={`Sign up with Github`}
          />
          <CommonButton
            buttonType={BUTTON_TYPE_FACEBOOK}
            cont={`Sign up with Facebook`}
          />
        </div>
        <InputFormContainer>
          <InputsContainer>
            <LabelInput label={email} type={'email'} />
            <LabelInput label={password} type={'password'} />
            <CommonButton cont={'Log in'} />
          </InputsContainer>
        </InputFormContainer>
        <Last>
          <LabelDescription>
            Don’t have an account? <Link to="signup">Sign up</Link>
          </LabelDescription>
          <LabelDescription style={{ paddingTop: '10px' }}>
            Are you an employer?{' '}
            <a href="https://careers.stackoverflow.com/employer/login">
              Sign up on Talent <RandomIcon />
            </a>
          </LabelDescription>
        </Last>
      </LoginContainer>
    </section>
  );
}

export default Login;
