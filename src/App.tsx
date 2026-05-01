import React from 'react';
import MenuPage from './MenuPage.tsx';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{ padding: '20px', background: '#f8f9fa', borderBottom: '1px solid #dee2e6', textAlign: 'center' }}>
        <h1 style={{ margin: 0, color: '#333', textTransform: 'uppercase', letterSpacing: '2px' }}>ouhlalaterrasini</h1>
      </header>
      <main>
        <MenuPage />
      </main>
    </div>
  );
}
