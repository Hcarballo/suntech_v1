// src/componentes/SeccionProducts/insertProduct.jsx
import React, { useState } from "react";
import axios from "axios";
import "../SeccionProducts/CSS/Productinsert.css"

const ProductInsert = () => {
  const [formData, setFormData] = useState({
    codigo: "",
    descripcion: "",
    categoria: "",
    datoAdicional: "",
    precioVentaPublicoSinIVA: "",
    precioDistribuidorSinIVA: "",
    iva: 0.21,
    precioPublico: "",
    porcentajeGanancia: "",
    imagen: "",
    dataSheet: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar al backend
      const res = await axios.post("/api/products", formData);
      console.log("Producto agregado:", res.data);
      setMensaje("✅ Producto cargado con éxito");
      setFormData({
        codigo: "",
        descripcion: "",
        categoria: "",
        datoAdicional: "",
        precioVentaPublicoSinIVA: "",
        precioDistribuidorSinIVA: "",
        iva: 0.21,
        precioPublico: "",
        porcentajeGanancia: "",
        imagen: "",
        dataSheet: "",
      });
    } catch (error) {
      console.error("Error al cargar producto:", error);
      setMensaje("❌ Error al cargar el producto");
    }
  };

  return (
    <div className="product-form-container">
      <h2>Cargar nuevo producto</h2>
      {mensaje && <p>{mensaje}</p>}
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          name="codigo"
          placeholder="Código"
          value={formData.codigo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={formData.categoria}
          onChange={handleChange}
        />
        <input
          type="text"
          name="datoAdicional"
          placeholder="Dato adicional"
          value={formData.datoAdicional}
          onChange={handleChange}
        />
        <input
          type="number"
          name="precioVentaPublicoSinIVA"
          placeholder="Precio público sin IVA"
          value={formData.precioVentaPublicoSinIVA}
          onChange={handleChange}
        />
        <input
          type="number"
          name="precioDistribuidorSinIVA"
          placeholder="Precio distribuidor sin IVA"
          value={formData.precioDistribuidorSinIVA}
          onChange={handleChange}
        />
        <input
          type="number"
          name="iva"
          placeholder="IVA"
          value={formData.iva}
          onChange={handleChange}
        />
        <input
          type="number"
          name="precioPublico"
          placeholder="Precio final público"
          value={formData.precioPublico}
          onChange={handleChange}
        />
        <input
          type="number"
          name="porcentajeGanancia"
          placeholder="Porcentaje de ganancia"
          value={formData.porcentajeGanancia}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imagen"
          placeholder="URL de imagen"
          value={formData.imagen}
          onChange={handleChange}
        />
        <input
          type="text"
          name="dataSheet"
          placeholder="URL del datasheet"
          value={formData.dataSheet}
          onChange={handleChange}
        />

        <button type="submit">Cargar producto</button>
      </form>
    </div>
  );
};

export default ProductInsert;