import Sidebar from '../components/Sidebar';

/**
 * # QuestionList
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
 * @returns QuestionList
 */
function QuestionList() {
  return (
    <>
      <section className="mainSection withSideBar">
        <div>질문들</div>
        <Sidebar />
      </section>
    </>
  );
}

export default QuestionList;
