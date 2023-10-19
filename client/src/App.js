import { useState, useEffect } from 'react';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  const handleDarkMode = () => {
    setMode('dark');
    localStorage.setItem('theme', 'dark');
  };

  const handleLightMode = () => {
    setMode('light');
    localStorage.setItem('theme', 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setMode(savedTheme);
    }
  }, []);

  return (
    <div className={`bg-${mode} w-screen h-12`}>
      <h1 className={`text-${mode}`}>Theme</h1>

      <button onClick={handleDarkMode}>Set Dark Theme</button>
      <button onClick={handleLightMode}>Set Light Theme</button>
    </div>
  );
}

export default App;
