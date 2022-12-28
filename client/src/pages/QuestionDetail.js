import Sidebar from '../components/Sidebar';
import { MainWithSidebarContainer } from '../styles/StyledStore';

/**
 * # QuestionDetail
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
 * 질문 상세
 *
 * @returns QuestionDetail
 */
function QuestionDetail() {
  return (
    <MainWithSidebarContainer>
      <div>질문들</div>
      <Sidebar />
    </MainWithSidebarContainer>
  );
}

export default QuestionDetail;
