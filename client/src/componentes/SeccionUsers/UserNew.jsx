// src/componentes/SeccionUsers/UserNew.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../SeccionUsers/css/UserList.css";

const UserNew = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/users", formData);
      alert("Usuario creado ✅");
      navigate("/users");
    } catch (error) {
      console.error(error);
      alert("❌ Error al crear usuario");
    }
  };

  return (
    <div className="users-container">
      <h1>Agregar Usuario</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

        <label>Rol</label>
        <select name="role" value={formData.role} onChange={handleInputChange} required>
          <option value="user">Usuario</option>
          <option value="admin">Admin</option>
        </select>

        <label>Contraseña</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />

        <div className="form-buttons">
          <button type="button" onClick={() => navigate("/userslist")} className="btn-cancelar">
            Cancelar
          </button>
          <button type="submit" className="btn-confirmar">Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default UserNew;