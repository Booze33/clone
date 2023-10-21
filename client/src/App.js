import { useState, useEffect } from 'react';

function App() {
  const getInitialTheme = () => {
    return localStorage.getItem('theme') || 'light';
  };

  const [mode, setMode] = useState(getInitialTheme);

  const handleThemeChange = (newTheme) => {
    setMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setMode(savedTheme);
    }
  }, []);

  return (
    <div className={`bg-${mode} w-screen h-12 text-${mode}`}>
      <h1>Theme</h1>
      <p>lorem this is the test for handling theme pray it works</p>

      <button onClick={() => handleThemeChange('dark')}>Set Dark Theme</button>
      <button onClick={() => handleThemeChange('light')}>Set Light Theme</button>
    </div>
  );
}

export default App;
