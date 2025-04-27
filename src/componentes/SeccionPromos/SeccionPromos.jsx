import React, { useState } from 'react';
import "./SeccionPromos.css";
import promo from "../../assets/Promos/promo_8820.png";
const phoneNumber = '+5493412587830';
const message = 'Podés contactarnos por:';
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const SeccionPromos = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className='seccionpromo'>
            <div className="promo-container" id='pro'>
                <h2 className="promo-title">✨ Promoción Especial Abril 2025 ✨</h2>

                <img
                    src={promo}
                    alt="Promoción Abril 2025"
                    className="promo-image"
                />

                <ul className="promo-features">
                    <li>✔ 6 Paneles solares 580W monocristalino</li>
                    <li>✔ Estructuras de Aluminio</li>
                    <li>✔ Inversor Growatt 3.5kw con monitoreo WiFi</li>
                    <li>✔ Batería Growatt de litio 5kWh 100ah</li>
                    <li>✔ Instalación incluida</li>
                </ul>

                <button className="promo-button" onClick={handleOpenModal}>Quiero esta promo</button>

                {/* Modal */}
                {showModal && (
                    <div className="modal-overlay" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h3>¡Hablemos!</h3>
                            <p>{message}</p>
                            <ul>
                                <li>
                                    <a href={whatsappURL} target="_blank" rel="noopener noreferrer">📱 WhatsApp</a>
                                </li>
                                <li>
                                    <a href="mailto:admin@suntech.com.ar">✉️ Correo electrónico</a>
                                </li>
                            </ul>
                            <button className="modal-close-btn" onClick={handleCloseModal}>Cerrar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SeccionPromos;
