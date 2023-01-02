import styled from 'styled-components';
import Line from './Line';
import RandomIcon from './RandomIcon';
import { TiDeleteOutline } from 'react-icons/ti';
// #FDF7E2

const CommonSection = styled.section`
  width: 300px;
  height: auto;
  color: black;
  background-color: transparent;
  margin-top: ${(props) =>
    props.type === 2 || props.type === 3 || props.type === 4 || props.type === 5
      ? '12px'
      : '0px'};
`;

const Section = styled(CommonSection)`
  border: 1px solid ${(props) => (props.type === 1 ? '#f1e5bc' : '#d6d9dc')};
  background-color: ${(props) => (props.type === 1 ? '#fbf3d5' : '#f8f9f9')};
  border-radius: 2px;
`;

const Title = styled.p`
  height: 41px;
  padding: 12px 15px;
  font-size: ${(props) => (props.type === 1 ? '12px' : '15px')};
`;

const TitleDown = styled(Title)`
  font-size: 19px;
`;

const Conts = styled.ul`
  background-color: ${(props) => (props.type === 1 ? '#fdf7e2' : '#ffffff')};
  font-size: ${(props) => (props.type === 1 ? '13px' : '13px')};
  color: ${(props) => (props.type === 2 ? 'blue' : 'black')};
`;

const Cont = styled.li`
  padding: 12px 16px;
  display: flex;
`;

const Span = styled.span`
  padding-left: 4px;
`;

/**
 * Craeted by TY
 * @param { cont }
 * @returns <div>
 */
function Section7({ cont }) {
  const title = cont.title;
  const member = cont.member;
  const description = cont.description;
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <RandomIcon />
        <div>
          <p>{title}</p>
          <p>{member}</p>
        </div>
        <div>Join</div>
      </div>
      <div>{description}</div>
      <Line grey={'true'} />
    </div>
  );
}

/**
 * Craeted by TY
 * @param { cont }
 * @returns <li>
 */
function Section8({ cont }) {
  return (
    <li style={{ padding: '0px 12px' }}>
      <Span>{`${cont.name} x ${cont.count}`}</Span>
    </li>
  );
}

/**
 * Craeted by TY
 * @param { cont }
 * @returns <li>
 */
function Section9({ cont }) {
  return (
    <li style={{ display: 'flex', padding: '0px 12px' }}>
      <RandomIcon />
      <Span>{cont}</Span>
    </li>
  );
}

/**
 * Created by @KimTank
 * TODO 여러가지 엮어쓰느라 복잡해짐. 값엮어줄때 따로 분리하는게 나을걸로봄
 * @param { props }
 * @returns <>
 */
function Sidebar({ props }) {
  const type = props.type;
  const title = props.title;
  const conts = props.conts;
  return (
    <>
      {type === 6 ? (
        <CommonSection>
          <TitleDown>
            <strong>{title}</strong>
          </TitleDown>
          <ul>
            {conts.map((cont, index) => (
              <Section8 cont={cont} key={index} />
            ))}
          </ul>
        </CommonSection>
      ) : type === 7 ? (
        <CommonSection>
          {' '}
          <TitleDown>
            <strong>{title}</strong>
          </TitleDown>
          <ul>
            {conts.map((cont, index) => (
              <Section9 cont={cont} key={index} />
            ))}
          </ul>
        </CommonSection>
      ) : (
        <Section type={type}>
          <Title type={type}>
            {type === 1 ? <strong>title</strong> : title}
          </Title>
          <Line
            sideBarColor={type === 1 ? 'true' : undefined}
            grey={
              type === 2 || type === 3 || type === 4 || type === 5
                ? 'true'
                : undefined
            }
          />
          <Conts type={type}>
            {conts.length === 0 ? (
              <Cont>no contents</Cont>
            ) : (
              conts.map((cont, index) =>
                type === 5 ? (
                  <Section7 key={index} cont={cont} />
                ) : (
                  <Cont key={index}>
                    {type === 1 ? <RandomIcon /> : ''}
                    <Span>{cont}</Span>
                    {type === 3 ? (
                      <TiDeleteOutline
                        value={{
                          size: '5em',
                          style: { verticalAlign: 'middle' },
                        }}
                      />
                    ) : (
                      ''
                    )}
                  </Cont>
                )
              )
            )}
          </Conts>
          <Line sideBarColor={'true'} />
        </Section>
      )}
    </>
  );
}

export default Sidebar;
