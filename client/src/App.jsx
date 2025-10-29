// src/App.jsx
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

// Componentes globales
import Navbar from "./componentes/NavBar/NavBar.jsx";

// Secciones principales
import SeccionOne from "./componentes/SeccionOne/SeccionOne.jsx";
import SeccionEstadisticas from "./componentes/SeccionEstadisticas/SeccionEstadisticas.jsx";
import SeccionEmpresa from "./componentes/SeccionEmpresa/SeccionEmpresa.jsx";
import SeccionPaneles from "./componentes/SeccionPaneles/SeccionPaneles.jsx";
import SeccionCamara from "./componentes/SeccionCamara/SeccionCamara.jsx";
import SeccionTanques from "./componentes/SeccionTanques/SeccionTanques.jsx";
import SeccionBombas from "./componentes/SeccionBombas/SeccionBombas.jsx";
import SeccionMantas from "./componentes/SeccionMantas/SeccionMantas.jsx";
import SeccionThree from "./componentes/SeccionThree/SeccionThree.jsx";
import SeccionNosotros from "./componentes/SeccionNosotros/SeccionNosotros.jsx";
import SeccionMarcas from "./componentes/SeccionMarcas/SeccionMarcas.jsx";
import SeccionTrabajos from "./componentes/SeccionTrabajos/SeccionTrabajos.jsx";
import SeccionContacto from "./componentes/SeccionContacto/SeccionContacto.jsx";

// Rutas adicionales
import Products from "./componentes/SeccionProducts/Products.jsx";
import ProductList from "./componentes/SeccionProducts/ProductsList.jsx";
import ProductInsert from "./componentes/SeccionProducts/ProductInsert.jsx";
import ProductEdit from "./componentes/SeccionProducts/ProductEdit.jsx";
import UserList from "./componentes/SeccionUsers/UserList.jsx";
import UserEdit from "./componentes/SeccionUsers/UserEdit.jsx"
import UserNew from "./componentes/SeccionUsers/UserNew.jsx";
import ClientList from "./componentes/SeccionClients/clientList.jsx"

import InfoBombas from "./componentes/SeccionBombas/InfoBombas.jsx";
import InfoCamaras from "./componentes/SeccionCamara/InfoCamaras.jsx";
import InfoMantas from "./componentes/SeccionMantas/InfoMantas.jsx";
import InfoPaneles from "./componentes/SeccionPaneles/InfoPaneles.jsx";
import InfoTanques from "./componentes/SeccionTanques/InfoTanques.jsx";
import Deye from "./componentes/SeccionMarcas/Deye.jsx";
import Growatt from "./componentes/SeccionMarcas/Growatt.jsx";
import Ezviz from "./componentes/SeccionMarcas/Ezviz.jsx";
import Amerisolar from "./componentes/SeccionMarcas/Amerisolar.jsx";

// Login & Registro
import Login from "./componentes/SeccionLogin/Login.jsx";
import Register from "./componentes/SeccionRegistro/Register.jsx";

// ===============================
// 🔒 Componente para rutas privadas
// ===============================
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

// ===============================
// 📱 Componente principal
// ===============================
const App = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const navigate = useNavigate();

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

  const handleLogout = () => {
    setUser(null);
    navigate("/"); // 🔹 redirige al inicio
  };

  return (
    <>
      {/* Navbar siempre visible */}
      <Navbar
        user={user}
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onLogout={handleLogout}
      />

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* Páginas accesibles por todos */}
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

        {/* 🔒 Rutas privadas (solo logueado) */}
        <Route
          path="/productslist"
          element={
            <ProtectedRoute user={user}>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/productinsert"
          element={
            <ProtectedRoute user={user}>
              <ProductInsert />
            </ProtectedRoute>
          }
        />
        <Route
          path="/productedit/:id"
          element={
            <ProtectedRoute user={user}>
              <ProductEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userslist"
          element={
            <ProtectedRoute user={user}>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/useredit/:id"
          element={
            <ProtectedRoute user={user}>
              <UserEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userinsert"
          element={
            <ProtectedRoute user={user}>
              <UserNew />
            </ProtectedRoute>
          }
        />
         <Route
          path="/clientlist"
          element={
            <ProtectedRoute user={user}>
              <ClientList />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Modales Login/Register */}
      {showLogin && <Login onLogin={handleLogin} onClose={closeModals} />}
      {showRegister && <Register onClose={closeModals} />}
    </>
  );
};

export default App;
