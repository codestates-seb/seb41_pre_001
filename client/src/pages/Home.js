import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="mainSection withSideBar">
        <div>
          <Link to="questionCreate">ask asdfasdfasdf</Link>
        </div>
        <Sidebar />
      </section>
    </>
  );
}

export default Home;
