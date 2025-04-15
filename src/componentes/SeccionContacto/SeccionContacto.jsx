import React, { useState } from 'react';
import "./SeccionContacto.css";

const SeccionContacto = () => {
  const phoneNumber = '5493415919379';
  const message = 'Hola! Quisiera más información';
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Mensaje de ${formData.nombre}`;
    const body = `Nombre: ${formData.nombre}\nCorreo: ${formData.correo}\n\nMensaje:\n${formData.mensaje}`;
    window.location.href = `mailto:hernancarballo@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <div className="seccionsixheader" id="cont">
        <div className="seccionsixheader-left">
          <h3>Comentarios</h3>
          <p>Deja tu comentario o pregunta aquí...</p>
        </div>

        <div className="seccionsixheader-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="input-field"
              required
              value={formData.nombre}
              onChange={handleChange}
            /><br />
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              className="input-field"
              required
              value={formData.correo}
              onChange={handleChange}
            /><br />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje..."
              className="input-field"
              required
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea><br />
            <button type="submit">Enviar</button>
          </form>

          <a href={whatsappURL} className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>


        <div className="seccioninfofinal">
          <h3>Contacto</h3>
          <div className="d-flex flex-column gap-2 ">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-telephone-fill"></i>
              <span>+54 9 3413284542 / +54 9 3415919379</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill"></i>
              <span>consultas@suntech.com</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default SeccionContacto;
