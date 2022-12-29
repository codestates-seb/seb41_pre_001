import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
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
    <QLContainer>
      <article className="mainSection">
        <h1>Top Questions</h1>
        {/*eslint-disable-next-line prettier/prettier*/}
        <a href="https://www.google.com/search?q=what+is+javascript">
          What is Javascript?
        </a>
        <p>
          JavaScript is a scripting or programming language that allows you to
          implement complex features on web pages — every time a web page does
          more than just sit there and display static information for you to
          look at — displaying timely content updates, interactive maps,
          animated 2D/3D graphics, scrolling video jukeboxes, etc...{' '}
        </p>
        <a href="https://www.google.com/search?q=what+is+css">What is CSS? </a>
        {/*eslint-disable-next-line prettier/prettier*/}
        <p>
          CSS (Cascading Style Sheets) allows you to create great-looking web
          pages, but how does it work under the hood? This article explains what
          CSS is with a simple syntax example and also covers some key terms
          about the language.
        </p>
        <a href="https://www.google.com/search?q=what+is+html">What is HTML?</a>
        {/*eslint-disable-next-line prettier/prettier*/}
        <p>
          HTML (HyperText Markup Language) is the code that is used to structure
          a web page and its content. For example, content could be structured
          within a set of paragraphs, a list of bulleted points, or using images
          and data tables. As the title suggests, this article will give you a
          basic understanding of HTML and its functions.
        </p>
        {/*div tag 넣으면 작동이 안 됨*/}
        <Sidebar />
      </article>
    </QLContainer>
  );
}

const QLContainer = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 200px;
  article {
    flex: 1;
  }
  article:nth-of-type(3) {
    flex: 2;
  }
  article {
    flex: 1 200px;
  }
  article:nth-of-type(3) {
    flex: 2 200px;
  }
  article {
    display: flex;
    justify-content: space-evenly;
  }
`;

function main() {
  return <QuestionList />;
}

export default QuestionList;
main;
