import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <>
      <section className="mainSection withSideBar">
        <div>홈</div>
        <Sidebar />
      </section>
    </>
  );
}

export default Home;
