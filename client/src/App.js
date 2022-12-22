import AskCreate from './pages/AskCreate';
function App() {
  return (
    <>
      <header>헤더</header>
      <div>
        <navigator>네비</navigator>
        <main>
          <AskCreate />
        </main>
        <sidebar></sidebar>
      </div>
      <footer>푸터</footer>
    </>
  );
}

export default App;
