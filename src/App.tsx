import AboutPage from './AboutPage.tsx';
import MenuPage from './MenuPage.tsx';
import ContactPage from './ContactPage.tsx';

export default function App() {
  return (
    <div>
      <header style={{ padding: '20px', background: '#f0f0f0' }}>
        <h1>Ouhlala Materrasini</h1>
      </header>
      <main>
        {/* Visualizziamo MenuPage come pagina predefinita */}
        <MenuPage /> 
      </main>
    </div>
  );
}
