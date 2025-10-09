// src/componentes/SeccionProducts/EditProduct.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../SeccionProducts/css/Products.css";

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
    stock: "",
    status: true,
    timestamps: new Date().toISOString(),
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

  // 🔹 Manejar cambios del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🔹 Enviar cambios al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${id}`, formData);
      setMensaje("✅ Producto actualizado con éxito");
      setTimeout(() => navigate("/productslist"), 1500);
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
        <label>
          Código:
          <input
            type="text"
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Descripción:
          <input
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </label>

        <label>
          Categoría:
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          />
        </label>

        <label>
          Dato adicional:
          <input
            type="text"
            name="datoAdicional"
            value={formData.datoAdicional}
            onChange={handleChange}
          />
        </label>

        <label>
          Precio público sin IVA:
          <input
            type="number"
            name="precioVentaPublicoSinIVA"
            value={formData.precioVentaPublicoSinIVA}
            onChange={handleChange}
          />
        </label>

        <label>
          Precio distribuidor sin IVA:
          <input
            type="number"
            name="precioDistribuidorSinIVA"
            value={formData.precioDistribuidorSinIVA}
            onChange={handleChange}
          />
        </label>

        <label>
          IVA:
          <input
            type="number"
            name="iva"
            value={formData.iva}
            onChange={handleChange}
            step="0.01"
          />
        </label>

        <label>
          Precio final público:
          <input
            type="number"
            name="precioPublico"
            value={formData.precioPublico}
            onChange={handleChange}
          />
        </label>

        <label>
          Porcentaje de ganancia:
          <input
            type="number"
            name="porcentajeGanancia"
            value={formData.porcentajeGanancia}
            onChange={handleChange}
          />
        </label>

        <label>
          URL de imagen:
          <input
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
          />
        </label>

        <label>
          URL del datasheet:
          <input
            type="text"
            name="dataSheet"
            value={formData.dataSheet}
            onChange={handleChange}
          />
        </label>

        <label>
          Stock:
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </label>

        <label className="checkbox-label">
          Activo:
          <input
            type="checkbox"
            name="status"
            checked={formData.status}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};

export default ProductEdit;
