import React, { useState } from 'react';

const Login = ({ onLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 👈 Evita recarga de página
    // Validar datos...
    onLogin({ name: "Usuario real", email });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar sesión</button>
        </form>
        <button type="button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Login;


