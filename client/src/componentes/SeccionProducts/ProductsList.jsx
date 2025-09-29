// src/componentes/SeccionProducts/ProductList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";  // 🔹 Importamos la lupa
import "../SeccionProducts/CSS/ProductList.css";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🔹 Traer productos al iniciar
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      const productsArray = Array.isArray(res.data)
        ? res.data
        : res.data.products || [];

      setAllProducts(productsArray);
      setFilteredProducts(productsArray);
    } catch (error) {
      console.error("Error al traer productos:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Filtrar por búsqueda
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    const filtered = allProducts.filter(
      (p) =>
        p.codigo?.toLowerCase().includes(value.toLowerCase()) ||
        p.descripcion?.toLowerCase().includes(value.toLowerCase()) ||
        p.categoria?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  // 🔹 Eliminar producto
  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este producto?")) return;

    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts(); // refrescar lista
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      alert("❌ Error al eliminar producto");
    }
  };

  return (
    <div className="products-container">
      <h1>Listado de Productos</h1>

      {/* 🔹 Barra de búsqueda con lupa */}
      <div className="search-bar">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchInput}
            onChange={handleSearchChange}
          />
        </div>
        <button onClick={() => navigate("/productinsert")}>
          ➕ Agregar producto
        </button>
      </div>

      {/* 🔹 Lista de productos */}
      {loading ? (
        <p>Cargando productos...</p>
      ) : filteredProducts.length === 0 ? (
        <p>No se encontraron productos</p>
      ) : (
        <table className="products-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td>{product.codigo}</td>
                <td>{product.descripcion}</td>
                <td>{product.categoria}</td>
                <td>${product.precioPublico}</td>
                <td className="botones">
                  <button onClick={() => navigate(`/productedit/${product._id}`)}>
                    ✏️
                  </button>
                  <button onClick={() => handleDelete(product._id)}>
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

export default ProductList;
