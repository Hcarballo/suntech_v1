// src/componentes/SeccionUsers/UserEdit.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../SeccionUsers/css/UserList.css";


const UserEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user"
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`/api/users/${id}`);
      setFormData({
        name: res.data.name,
        email: res.data.email,
        role: res.data.role
      });
    } catch (error) {
      console.error(error);
      alert("❌ Error al cargar usuario");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/users/${id}`, formData);
      alert("Usuario actualizado ✅");
      navigate("/users");
    } catch (error) {
      console.error(error);
      alert("❌ Error al actualizar usuario");
    }
  };

  return (
    <div className="users-container">
      <h1>Editar Usuario</h1>
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

        <div className="form-buttons">
          <button type="button" onClick={() => navigate("/userslist")} className="btn-cancelar">
            Cancelar
          </button>
          <button type="submit" className="btn-confirmar">Guardar cambios</button>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
