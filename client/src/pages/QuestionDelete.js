import Sidebar from '../components/Sidebar';

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
    <>
      {/* Sidebar 없으면 지우면됨 */}
      <section className="mainSection withSideBar">
        <div>질문 삭제</div>
        <Sidebar />
      </section>
    </>
  );
}

export default QuestionDelete;
