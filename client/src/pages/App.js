import Header from '../components/Header';
import NavSidebar from '../components/NavSidebar';
import Sidebar from '../components/Sidebar';

function App() {
  return (
    <div className="appContainer">
      <header>
        <Header />
      </header>
      <div className="bodyContainer">
        <NavSidebar />
        <main>그냥라우터</main>
        <Sidebar />
      </div>
      <footer>푸터</footer>
    </div>
  );
}

export default App;
