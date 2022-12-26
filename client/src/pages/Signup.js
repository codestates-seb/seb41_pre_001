import styled from 'styled-components';
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
  RightContainer,
  RowDiv,
} from '../styles/StyledStore';

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

function Signup() {
  const name = 'Display name';
  const email = 'Email';
  const password = 'Password';

  return (
    <section className="mainSection">
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
            <LabelInput label={name} inputType={'text'} />
            <LabelInput label={email} inputType={'email'} />
            <LabelInput label={password} inputType={'password'} />
            <Description>{`Passwords must contain at least eight characters, including at least 1 letter and 1 number.}`}</Description>
            <Capcha />
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
            <CommonButton cont={'Sign up'} />
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
    </section>
  );
}

export default Signup;
