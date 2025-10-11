import React, { useState, useEffect } from "react";
import axios from "axios";
import "../SeccionProducts/css/Products.css";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // Modal detalle
  const [cartProduct, setCartProduct] = useState(null); // Modal carrito
  const [quantity, setQuantity] = useState(1); // cantidad elegida

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

  const handleDetail = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCartProduct(product);
    setQuantity(1);
  };

  const handleConfirmAdd = () => {
    alert(
      `🛒 Agregado al carrito:\n${cartProduct.codigo} × ${quantity} unidad(es)`
    );
    setCartProduct(null);
  };

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (value > 0 && value <= cartProduct.stock) {
      setQuantity(value);
    }
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
              <p className="product-price">
                💲{Number(product.precioPublico).toFixed(2)}
              </p>

              {/* Stock disponible */}
              <p
                className={
                  product.stock > 0
                    ? "product-stock stock-ok"
                    : "product-stock stock-low"
                }
              >
                Stock:{" "}
                {product.stock > 0
                  ? `${product.stock} disponibles`
                  : "Sin stock"}
              </p>

              <div className="buttons">
                <button onClick={() => handleDetail(product)}>Detalle</button>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock <= 0}
                  className={product.stock <= 0 ? "disabled" : ""}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🔹 Modal Detalle Producto */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <img
              src={selectedProduct.imagen || "https://via.placeholder.com/300"}
              alt={selectedProduct.codigo}
              className="modal-image"
            />
            <h2>{selectedProduct.codigo || "Sin código"}</h2>

            <p>
              <strong>Descripción:</strong>{" "}
              {selectedProduct.descripcion || "Sin descripción"}
            </p>
            <p>
              <strong>Categoría:</strong>{" "}
              {selectedProduct.categoria || "Sin categoría"}
            </p>
            <p>
              <strong>Precio:</strong> $
              {Number(selectedProduct.precioPublico || 0).toFixed(2)}
            </p>
            <p>
              <strong>Stock:</strong> {selectedProduct.stock ?? "N/A"} unidades
            </p>

            <p>
              <strong>Datasheet:</strong>{" "}
              {selectedProduct.dataSheet &&
              selectedProduct.dataSheet.trim() !== "" ? (
                <a
                  href={selectedProduct.dataSheet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="datasheet-link"
                >
                  Ver datasheet
                </a>
              ) : (
                <span className="no-datasheet">Sin datasheet</span>
              )}
            </p>

            <button onClick={() => setSelectedProduct(null)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* 🔹 Modal Agregar al carrito */}
      {cartProduct && (
        <div className="modal-overlay" onClick={() => setCartProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setCartProduct(null)}
            >
              ×
            </button>

            <h2>Agregar al carrito</h2>
            <img
              src={cartProduct.imagen || "https://via.placeholder.com/300"}
              alt={cartProduct.codigo}
              className="modal-image"
            />

            <p>
              <strong>{cartProduct.codigo}</strong> —{" "}
              {cartProduct.descripcion || "Sin descripción"}
            </p>
            <p>
              <strong>Precio:</strong> $
              {Number(cartProduct.precioPublico || 0).toFixed(2)}
            </p>
            <p>
              <strong>Stock disponible:</strong> {cartProduct.stock}
            </p>

            {/* Campo cantidad */}
            <label>
              Cantidad:
              <input
                type="number"
                min="1"
                max={cartProduct.stock}
                value={quantity}
                onChange={handleQuantityChange}
                className="quantity-input"
              />
            </label>

            <button onClick={handleConfirmAdd}>Confirmar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
