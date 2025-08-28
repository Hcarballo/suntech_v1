// src/App.jsx
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

// Componentes globales
import Navbar from './componentes/NavBar/NavBar';

// Secciones principales
import SeccionOne from "./componentes/SeccionOne/SeccionOne";
import SeccionEstadisticas from "./componentes/SeccionEstadisticas/SeccionEstadisticas";
import SeccionEmpresa from "./componentes/SeccionEmpresa/SeccionEmpresa";
import SeccionPaneles from "./componentes/SeccionPaneles/SeccionPaneles";
import SeccionCamara from "./componentes/SeccionCamara/SeccionCamara";
import SeccionTanques from "./componentes/SeccionTanques/SeccionTanques";
import SeccionBombas from "./componentes/SeccionBombas/SeccionBombas";
import SeccionMantas from "./componentes/SeccionMantas/SeccionMantas";
import SeccionThree from "./componentes/SeccionThree/SeccionThree";
import SeccionNosotros from "./componentes/SeccionNosotros/SeccionNosotros";
import SeccionMarcas from "./componentes/SeccionMarcas/SeccionMarcas";
import SeccionTrabajos from "./componentes/SeccionTrabajos/SeccionTrabajos";
import SeccionContacto from "./componentes/SeccionContacto/SeccionContacto";

// Rutas adicionales
import Products from './componentes/SeccionProducts/Products';
import InfoBombas from './componentes/SeccionBombas/InfoBombas.jsx';
import InfoCamaras from './componentes/SeccionCamara/InfoCamaras.jsx';
import InfoMantas from './componentes/SeccionMantas/InfoMantas.jsx';
import InfoPaneles from './componentes/SeccionPaneles/InfoPaneles.jsx';
import InfoTanques from './componentes/SeccionTanques/InfoTanques.jsx';
import Deye from './componentes/SeccionMarcas/Deye.jsx';
import Growatt from './componentes/SeccionMarcas/Growatt.jsx';
import Ezviz from './componentes/SeccionMarcas/Ezviz.jsx';
import Amerisolar from './componentes/SeccionMarcas/Amerisolar.jsx';

// Login & Registro
import Login from './componentes/SeccionLogin/Login';
import Register from './componentes/SeccionRegistro/Register';

const App = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    closeModals();
  };

  return (
    <>
      {/* Navbar siempre visible */}
      <Navbar 
        user={user} 
        onLoginClick={handleLoginClick} 
        onRegisterClick={handleRegisterClick} 
        onLogout={() => setUser(null)} 
      />

      <Routes>
        {/* Página principal */}
        <Route path="/" element={
          <>
            <SeccionOne />
            <SeccionEstadisticas />
            <SeccionEmpresa />
            <SeccionPaneles />
            <SeccionCamara />
            <SeccionTanques />
            <SeccionBombas />
            <SeccionMantas />
            <SeccionThree />
            <SeccionMarcas />
            <SeccionTrabajos />
            <SeccionNosotros />
            <SeccionContacto />
          </>
        } />

        {/* Otras páginas */}
        <Route path="/products" element={<Products />} />
        <Route path="/infobombas" element={<InfoBombas />} />
        <Route path="/infocamaras" element={<InfoCamaras />} />
        <Route path="/infomantas" element={<InfoMantas />} />
        <Route path="/infopaneles" element={<InfoPaneles />} />
        <Route path="/infotanques" element={<InfoTanques />} />
        <Route path="/deye" element={<Deye />} />
        <Route path="/growatt" element={<Growatt />} />
        <Route path="/ezviz" element={<Ezviz />} />
        <Route path="/amerisolar" element={<Amerisolar />} />
      </Routes>

      {/* Modales Login/Register */}
      {showLogin && <Login onLogin={handleLogin} onClose={closeModals} />}
      {showRegister && <Register onClose={closeModals} />}
    </>
  );
};

export default App;
