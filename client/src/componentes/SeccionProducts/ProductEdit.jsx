// src/componentes/SeccionProducts/EditProduct.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../SeccionProducts/CSS/Products.css"; // reutilizamos estilos

const ProductEdit = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

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

  // 🔹 Traer datos del producto para editar
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        setFormData(res.data);
      } catch (error) {
        console.error("Error al obtener producto:", error);
        setMensaje("❌ No se pudo cargar el producto");
      }
    };

    fetchProduct();
  }, [id]);

  // 🔹 Actualizar formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 🔹 Enviar cambios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${id}`, formData);
      setMensaje("✅ Producto actualizado con éxito");
      setTimeout(() => navigate("/productslist"), 1500); // redirigir después de guardar
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      setMensaje("❌ Error al actualizar el producto");
    }
  };

  return (
    <div className="product-form-container">
      <h2>Editar producto</h2>
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

        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};

export default ProductEdit;
