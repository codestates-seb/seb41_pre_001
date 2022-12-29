import Sidebar from '../components/Sidebar';
import { MainContainer } from '../styles/StyledStore';

/**
 * # QuestionDelete
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
 * 질문 삭제 -> 필요없을지도모릅니다.
 *
 * @returns QuestionDelete
 */
function QuestionDelete() {
  return (
    <MainContainer>
      <div>질문 삭제</div>
      <Sidebar />
    </MainContainer>
  );
}

export default QuestionDelete;
