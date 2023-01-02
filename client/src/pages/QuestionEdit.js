import { useLocation } from 'react-router';
import AskEdit from '../components/AskEdit';

import AskEditScripts from '../components/AskEditScripts';

import { MainContainer } from '../styles/StyledStore';

/**
 * # QuestionCreate
 *
 * ## init
 *
 * @KimTank
 *
 * ## modified
 *
 * @TODO
 *
 * ## description
 *
 * - 질문 리스트
 * - nested route(중첩 라우트로 목록눌렀을 때 상세로 이동)
 *
 * @returns QuestionCreate
 */
function QuestionEdit() {
  const { state } = useLocation();

  return (
    <MainContainer>
      <AskEdit post={state.post} />
      <AskEditScripts />
    </MainContainer>
  );
}

export default QuestionEdit;
