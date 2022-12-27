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
      <section className="mainSection">
        <fieldset>What is JavaScript? </fieldset>
        <fieldset>What is CSS? </fieldset>
        <fieldset>What is HTML?</fieldset>
        {/*div tag 넣으면 작동이 안 됨*/}
        <Sidebar />
      </section>
    </>
  );
}

export default QuestionList;
