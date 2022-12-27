import Sidebar from '../components/Sidebar';

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
    <>
      {/* Sidebar 없으면 지우면됨 */}
      <section className="mainSection">
        <div>질문 수정</div>
        <Sidebar />
      </section>
    </>
  );
}

export default QuestionEdit;
