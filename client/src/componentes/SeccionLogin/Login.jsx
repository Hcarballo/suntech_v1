import React, { useState } from 'react';

const Login = ({ onLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://suntech-v1.onrender.com/api/sessions/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Error al iniciar sesión');
        return;
      }

      // Guardar token en localStorage (opcional)
      localStorage.setItem('token', data.token);

      // Avisar al padre
      onLogin(data.user);
    } catch (err) {
      console.error('Error en login:', err);
      setError('Error de conexión con el servidor');
    }
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Login;
