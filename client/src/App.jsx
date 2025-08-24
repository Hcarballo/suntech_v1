import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

import Navbar from './componentes/NavBar/NavBar';
import SeccionOne from "./componentes/SeccionOne/SeccionOne";
import SeccionEstadisticas from "./componentes/SeccionEstadisticas/SeccionEstadisticas";
import SeccionEmpresa from "./componentes/SeccionEmpresa/seccionempresa";
import SeccionPaneles from "./componentes/SeccionPaneles/SeccionPaneles";
import SeccionCamara from "./componentes/SeccionCamara/SeccionCamara";
import SeccionTanques from "./componentes/SeccionTanques/SeccionTanques";
import SeccionBombas from "./componentes/SeccionBombas/SeccionBombas";
import SeccionMantas from "./componentes/SeccionMantas/SeccionMantas"
import SeccionThree from "./componentes/SeccionThree/SeccionThree";
import SeccionNosotros from "./componentes/SeccionNosotros/SeccionNosotros";
import SeccionMarcas from "./componentes/SeccionMarcas/SeccionMarcas";
import SeccionTrabajos from "./componentes/SeccionTrabajos/SeccionTrabajos";
import SeccionContacto from "./componentes/SeccionContacto/SeccionContacto";

import Login from './componentes/Login';
import Register from './componentes/Register';

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

  // Esta función la pasamos al login para cerrar modal al iniciar sesión
  const handleLogin = (userData) => {
    setUser(userData);
    closeModals();
  };

  return (
    <>
      <Navbar 
        user={user} 
        onLoginClick={handleLoginClick} 
        onRegisterClick={handleRegisterClick} 
        onLogout={() => setUser(null)} 
      />

      {/* Contenido siempre visible */}
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

      {/* Modales */}
      {showLogin && <Login onLogin={handleLogin} onClose={closeModals} />}
      {showRegister && <Register onClose={closeModals} />}
    </>
  );
}

export default App;

