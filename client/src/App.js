import Page from './components/webpage/page';
import Navbar from './components/webpage/nav';

function App() {

  return (
    <div className="dark:bg-dark bg-light dark:text-dark text-light w-screen h-full">
      <Navbar />
      <Page />
    </div>
  );
}

export default App;