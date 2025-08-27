// src/componentes/SeccionProducts/Products.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);

  // Traer todos los productos al iniciar
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products'); // proxy de Vite
        console.log(res.data); // verificar que llegan los productos
        setAllProducts(res.data);
        setFilteredProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtrar productos por item, descripcion o codigo
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    const filtered = allProducts.filter(p =>
      (p.item?.toLowerCase().includes(value.toLowerCase()) ||
       p.descripcion?.toLowerCase().includes(value.toLowerCase()) ||
       p.codigo?.toLowerCase().includes(value.toLowerCase()))
    );

    setFilteredProducts(filtered);
  };

  // Funciones de botones
  const handleBuy = (product) => {
    alert(`Has comprado: ${product.item}`);
  };

  const handleDetail = (product) => {
    alert(
      `Detalle de producto: ${product.item}\n` +
      `Descripción: ${product.descripcion}\n` +
      `Código: ${product.codigo}\n` +
      `Precio: $${product.precio}`
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
                src={product.foto || 'https://via.placeholder.com/150'}
                alt={product.item}
              />
              <h3>{product.item}</h3>
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
