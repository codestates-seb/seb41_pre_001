import AskCreate from '../components/AskCreate';

/**
 * # QuestionCreate
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
 * @returns QuestionCreate
 */
function QuestionCreate() {
  return (
    <>
      <section className="mainSection">
        <AskCreate />
      </section>
    </>
  );
}

export default QuestionCreate;
