import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="mainSection">
        <div>
          <Link to="questionCreate">
            <fieldset>Ask Questions!</fieldset>
          </Link>
        </div>
        <Sidebar />
      </section>
    </>
  );
}

export default Home;
