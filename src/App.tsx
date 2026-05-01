import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import ContactPage from './ContactPage';

export default function App() {
  return (
    <div>
      <header style={{ padding: '20px', background: '#f0f0f0' }}>
        <h1>Ouhlala Materrasini</h1>
      </header>
      <main>
        <MenuPage /> {/* Questa sarà la pagina visualizzata all'inizio */}
      </main>
    </div>
  );
}
