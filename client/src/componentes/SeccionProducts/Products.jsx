import React, { useState, useEffect } from "react";
import axios from "axios";
import "../SeccionProducts/css/Products.css";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
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
        `Precio: $${product.precioPublico || 0}\n` +
        `Stock: ${product.stock ?? "N/A"} unidades`
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
                src={product.imagen || "https://via.placeholder.com/150"}
                alt={product.codigo}
              />
              <h3>{product.codigo}</h3>
              <p className="product-description">{product.descripcion}</p>
              <p className="product-price">💲{Number(product.precioPublico).toFixed(2)}</p>

              {/* 🔹 Mostrar stock disponible */}
              <p
                className={
                  product.stock > 0 ? "product-stock stock-ok" : "product-stock stock-low"
                }
              >
                Stock: {product.stock > 0 ? `${product.stock} disponibles` : "Sin stock"}
              </p>

              <div className="buttons">
                <button onClick={() => handleDetail(product)}>Detalle</button>
                <button
                  onClick={() => handleBuy(product)}
                  disabled={product.stock <= 0}
                  className={product.stock <= 0 ? "disabled" : ""}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

