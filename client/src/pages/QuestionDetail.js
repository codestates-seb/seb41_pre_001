import Sidebar from '../components/Sidebar';
import { MainContainer } from '../styles/StyledStore';

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
    <MainContainer>
      <div>질문들</div>
      <Sidebar />
    </MainContainer>
  );
}

export default QuestionDetail;
