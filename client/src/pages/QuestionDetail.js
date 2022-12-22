import Sidebar from '../components/Sidebar';

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
    <>
      {/* Sidebar 없으면 지우면됨 */}
      <section className="mainSection withSideBar">
        <div>질문들</div>
        <Sidebar />
      </section>
    </>
  );
}

export default QuestionDetail;
