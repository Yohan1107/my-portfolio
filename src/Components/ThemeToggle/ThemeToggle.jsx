// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const next = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(next)}
      style={{
        padding: '8px 12px',
        borderRadius: 8,
        border: '1px solid var(--border)',
        background: 'var(--card-bg)',
        color: 'var(--text)',
        cursor: 'pointer'
      }}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeToggle;
