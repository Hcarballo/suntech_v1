// src/componentes/SeccionUsers/UserList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../SeccionUsers/css/UserList.css"; // tu CSS exclusivo para usuarios

const UserList = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/users");
      const usersArray = Array.isArray(res.data)
        ? res.data
        : res.data.payload || [];
      setAllUsers(usersArray);
      setFilteredUsers(usersArray);
    } catch (error) {
      console.error("Error al traer usuarios:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    const filtered = allUsers.filter(
      (u) =>
        u.name?.toLowerCase().includes(value.toLowerCase()) ||
        u.email?.toLowerCase().includes(value.toLowerCase()) ||
        u.role?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    try {
      await axios.delete(`/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      alert("❌ Error al eliminar usuario");
    }
  };

  return (
    <div className="users-container">
      <h1>Listado de Usuarios</h1>

      <div className="search-bar">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar usuarios..."
            value={searchInput}
            onChange={handleSearchChange}
          />
        </div>
        <button onClick={() => navigate("/userinsert")}>
          ➕ Agregar usuario
        </button>
      </div>

      {loading ? (
        <p>Cargando usuarios...</p>
      ) : filteredUsers.length === 0 ? (
        <p>No se encontraron usuarios</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Fecha creación</th>
              <th className="acciones">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="botones">
                  <button
                    className="btn-editar"
                    onClick={() => navigate(`/useredit/${user._id}`)}
                  >
                    ✏️
                  </button>
                  <button
                    className="btn-eliminar"
                    onClick={() => handleDelete(user._id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
