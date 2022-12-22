import Sidebar from '../components/Sidebar';
import AskCreate from './AskCreate';

function Home() {
  return (
    <>
      <section className="mainSection withSideBar">
        <div>
          <AskCreate />
        </div>
        <Sidebar />
      </section>
    </>
  );
}

export default Home;
