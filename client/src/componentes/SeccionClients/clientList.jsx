// src/componentes/SeccionUsers/UserList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../SeccionClients/css/clientcss.css";

const ClientList = () => {
  const [allClients, setAllClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await axios.get("/api/clients");
      const clientsArray = Array.isArray(res.data)
        ? res.data
        : res.data.payload || [];
      setAllClients(clientsArray);
      setFilteredClients(clientsArray);
    } catch (error) {
      console.error("Error al traer clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    const filtered = allClients.filter(
      (u) =>
        u.last_name?.toLowerCase().includes(value.toLowerCase()) ||
        u.email?.toLowerCase().includes(value.toLowerCase()) ||
        u.telefono?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredClients(filtered);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este cliente?")) return;
    try {
      await axios.delete(`/api/client/${id}`);
      fetchClients();
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
      alert("❌ Error al eliminar cliente");
    }
  };

  return (
    <div className="client-container">
      <h1>Listado de Clientes</h1>

      <div className="search-bar">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar clientes..."
            value={searchInput}
            onChange={handleSearchChange}
          />
        </div>
        <button onClick={() => navigate("/clientnew")}>
          ➕ Agregar Cliente
        </button>
      </div>

      {loading ? (
        <p>Cargando clientes...</p>
      ) : filteredClients.length === 0 ? (
        <p>No se encontraron clientes</p>
      ) : (
        <table className="client-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Compras</th>
              <th className="acciones">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client._id}>
                <td>{client.first_name}</td>
                <td>{client.last_name}</td>
                <td>{client.email}</td>
                <td>{client.telefono}</td>
                <td>{client.telefono}</td>
                <td className="botones">
                  <button
                    className="btn-editar"
                    onClick={() => navigate(`/clientedit/${client._id}`)}
                  >
                    ✏️
                  </button>
                  <button
                    className="btn-eliminar"
                    onClick={() => handleDelete(client._id)}
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

export default ClientList;
