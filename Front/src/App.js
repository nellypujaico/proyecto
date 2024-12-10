import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Primero from './componentes/Primero'; // Navbar
import Portada from './componentes/Portada'; // Portada
import Video from './componentes/Video'; // Componente de video
import Footer from './componentes/Footer'; // Footer
import AgregarNoticia from './componentes/paginas/AgregarNoticia'; // Ajusta la ruta de acuerdo a tu estructura


// Importa los componentes para las páginas
import Registrarse from './componentes/paginas/Registrarse'; // Página de perfil de usuario

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Navbar visible en todas las rutas */}
      <Primero />

      {/* Condicional para mostrar Portada y Video excepto en /registrarse */}
      {location.pathname !== '/registrarse' && (
        <>
          <Portada />
          <Video />
        </>
      )}

      {/* Definición de rutas */}
      <Routes>
        <Route path="/registrarse" element={<Registrarse />} />
        {/* Ruta por defecto o error */}
        <Route path="/agregar-noticia" element={<AgregarNoticia />} />

        <Route  />
      </Routes>

      {/* Footer visible en todas las rutas */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
