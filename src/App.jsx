import { useState } from 'react';
import './App.css';
import YellowCircle from './assets/YellowCircle';

function App() {
  // State für den Counter
  const [count, setCount] = useState(0);

  // State für den Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  // Theme-Klasse setzen
  const themeClass = darkMode ? 'app dark' : 'app light';

  return (
    <div className={themeClass}>
      <h1>Mein kleiner Zähler</h1>
    {/* Gelber Kreis */}
    <YellowCircle />
      
      <div className="counter">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div className="actions">
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default App;
