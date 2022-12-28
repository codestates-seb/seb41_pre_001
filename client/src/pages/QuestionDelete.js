import Sidebar from '../components/Sidebar';
import { MainWithSidebarContainer } from '../styles/StyledStore';

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
    <MainWithSidebarContainer>
      <div>질문 삭제</div>
      <Sidebar />
    </MainWithSidebarContainer>
  );
}

export default QuestionDelete;
