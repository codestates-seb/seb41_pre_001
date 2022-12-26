import styled from 'styled-components';
import CommonButton, {
  BUTTON_TYPE_FACEBOOK,
  BUTTON_TYPE_GITHUB,
  BUTTON_TYPE_GOOGLE,
} from '../components/CommonButton';
import LabelInput from '../components/LabelInput';
import RandomIcon from '../components/RandomIcon';

const LeftContainer = styled.div`
  width: 316px;
  height: auto;
`;

const RightContainer = styled.div`
  width: 316px;
  height: auto;
`;

const InputFormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 316px;
  height: auto;
  border: 1px #d6d9dc solid;
  border-radius: 5px;
  background-color: #ffffff;
`;

const InputsContainer = styled.div`
  width: 270px;
  height: auto;
  padding: 24px 0px;
`;

const Description = styled.p`
  color: #6a737c;
  font-size: 12px;
  padding: 0px 8px;
`;

const CapchaContainer = styled.div`
  height: 156px;
  background-color: #f1f2f3;
  margin: 8px;
  border: 1px #d6d9dc solid;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Capcha = styled(CapchaContainer)`
  width: 170px;
  height: 120px;
  background-color: #f9f9f9;
`;

const CenterDiv = styled.div`
  padding: 4px 0px;
  align-items: center;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const LabelDescription = styled.div`
  font-size: 10px;
`;

const Desc = styled(LabelDescription)`
  padding-top: 24px;
`;
const Last = styled.div`
  padding: 24px 8px;
  text-align: center;
`;

function Signup() {
  const name = 'Display name';
  const email = 'Email';
  const password = 'Password';
  return (
    <section className="mainSection">
      <LeftContainer>
        <div></div>
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
            <CapchaContainer>
              <Capcha>
                <CenterDiv
                  style={{ color: 'red', fontSize: '12px', flex: '1' }}
                >
                  Verification expired. Check the checkbox again.
                </CenterDiv>
                <CenterDiv style={{ flex: '1' }}>
                  <label>
                    <input type={'checkbox'} />
                    {`  I'm not a robot`}
                  </label>
                </CenterDiv>
                <CenterDiv style={{ fontSize: '10px', flex: '1' }}>
                  <div>
                    <RandomIcon /> reCAPTCHA
                  </div>
                  <div>Privacy - Terms</div>
                </CenterDiv>
              </Capcha>
            </CapchaContainer>
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
