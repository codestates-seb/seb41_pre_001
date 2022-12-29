import styled from 'styled-components';
import RandomIcon from './RandomIcon';

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

const CapchaCont = styled(CapchaContainer)`
  width: 170px;
  height: 120px;
  background-color: #f9f9f9;
`;

const CenterDiv = styled.div`
  padding: 4px 0px;
  align-items: center;
`;

/**
 * Created by @KimTank
 * TODO Capcha - google
 * @returns <CapchaContainer>
 */
function Capcha({ isChecked, onClick }) {
  // capcha 일정시간 이후 자동체크풀림 진척도 너무걸려 무시
  //const [isChecked, setIsChecked] = useState(false);
  //   TODO 자동풀림
  //   const [initCount, setInitCount] = useState(0);
  //   const [count, setCount] = useState(10);

  //   useEffect(() => {
  //     setInterval(() => {
  //       setCount(count - 1);
  //     }, 1_000);
  //   }, [count]);

  // const handleChecked = () => {
  //   setIsChecked(true);
  // };

  return (
    <CapchaContainer>
      <CapchaCont>
        {/* TODO 자동풀림 
        {isChecked === true(
          <CenterDiv style={{ color: 'red', fontSize: '12px', flex: '1' }}>
            Verification expired. Check the checkbox again.
          </CenterDiv>
        ) : (
          ''
        )} */}
        <CenterDiv style={{ flex: '1' }}>
          {isChecked === true ? (
            <>
              <div style={{ paddingTop: '12px' }}>You&apos;re a Human</div>
              {/* TODO 자동풀림
              <div>{count}s</div> */}
            </>
          ) : (
            <>
              <input
                id="capcha"
                type={'checkbox'}
                style={{ paddingTop: '12px' }}
                onClick={onClick}
              />
              <label htmlFor="capcha">{`  I'm not a robot`}</label>
            </>
          )}
        </CenterDiv>
        <CenterDiv style={{ fontSize: '10px', flex: '1' }}>
          <div>
            <RandomIcon /> reCAPTCHA
          </div>
          <div>Privacy - Terms</div>
        </CenterDiv>
      </CapchaCont>
    </CapchaContainer>
  );
}
export default Capcha;
