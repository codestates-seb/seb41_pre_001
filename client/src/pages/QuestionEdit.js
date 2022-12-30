import Sidebar from '../components/Sidebar';
import { MainContainer } from '../styles/StyledStore';

/**
 * # QuestionEdit
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
 * 질문 수정
 *
 * @returns QuestionEdit
 */
function QuestionEdit() {
  return (
    <MainContainer>
      <div>질문 수정</div>
      <Sidebar />
    </MainContainer>
  );
}

export default QuestionEdit;
