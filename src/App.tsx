import React from 'react'; // Aggiungi questa riga!
import MenuPage from './MenuPage.tsx';

export default function App() {
  return (
    <div>
      <MenuPage />
    </div>
  );
}

import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import ContactPage from './ContactPage';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{ padding: '20px', background: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
        <h1 style={{ margin: 0, color: '#333' }}>ouhlalaterrasini</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <MenuPage />
      </main>
    </div>
  );
}
