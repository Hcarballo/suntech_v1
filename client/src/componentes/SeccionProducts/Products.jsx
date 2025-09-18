// src/componentes/SeccionProducts/Products.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  // Traer todos los productos al iniciar
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products"); // proxy de Vite apunta a tu backend
        console.log("Respuesta del backend:", res.data);

        const productsArray = Array.isArray(res.data)
          ? res.data
          : res.data.products || [];

        setAllProducts(productsArray);
        setFilteredProducts(productsArray);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  const handleBuy = (product) => {
    alert(`Has comprado: ${product.codigo}`);
  };

  const handleDetail = (product) => {
    alert(
      `Detalle de producto: ${product.codigo || "Sin código"}\n` +
        `Descripción: ${product.descripcion || "Sin descripción"}\n` +
        `Categoría: ${product.categoria || "Sin categoría"}\n` +
        `Precio: $${product.precio || 0}`
    );
  };

  return (
    <div className="products-container">
      <h1>Productos</h1>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>

      {/* Lista de productos */}
      {loading ? (
        <p>Cargando productos...</p>
      ) : filteredProducts.length === 0 ? (
        <p>No se encontraron productos</p>
      ) : (
        <div className="products-list">
          {filteredProducts.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.foto || 'via.placeholder.com/150'}
                alt={product.codigo}
              />
              <h3>{product.codigo}</h3>
              <p>Precio: ${product.precio}</p>
              <div className="buttons">
                <button onClick={() => handleDetail(product)}>Detalle</button>
                <button onClick={() => handleBuy(product)}>Comprar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
