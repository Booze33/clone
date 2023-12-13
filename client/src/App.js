import React from 'react';
import Page from './components/webpage/page';
import Navbar from './components/webpage/nav';
import Test  from "./features/test";

function App() {
  return (
    <div className="dark:bg-dark bg-light dark:text-dark text-light w-screen h-full">
      <Navbar />
      <Page />
      <Test />
    </div>
  );
}

export default App;
