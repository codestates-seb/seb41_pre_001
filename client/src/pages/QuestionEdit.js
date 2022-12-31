import AskEdit from '../components/AskCreate';

import AskEditScripts from '../components/AskCreateScripts';

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
  return (
    <MainContainer>
      <AskEdit />
      <AskEditScripts />
    </MainContainer>
  );
}

export default QuestionEdit;
