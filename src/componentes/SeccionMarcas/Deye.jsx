import "./SeccionMarcas.css";
import suntech_logo from '../../assets/Logos/logo_SunTech_2.png';
import { useNavigate } from 'react-router-dom';

const Deye = () => {
    const navigate = useNavigate();

    return (
        <div className="container py-5">
            {/* Logos arriba */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <img src={suntech_logo} alt="Logo Suntech" className='marcas_logo' />
            </div>

            <hr />

            {/* Iframe con la web de Deye */}
            <div className="iframe-container my-4">
                <iframe
                    src="https://deye.com/es/product-category/inverter/three-phase-string-inverter/"
                    title="Deye Site"
                    width="100%"
                    height="600"
                    style={{ border: 'none' }}
                />
            </div>

            {/* Botón volver */}
            <div className="text-center mt-5" style={{ visibility: 'visible', opacity: 1 }}>
                <button
                    className="btn btn-primary"
                    style={{ padding: '10px 20px', fontSize: '1rem' }}
                    onClick={() => navigate('/')}
                >
                    Volver al inicio
                </button>
            </div>
        </div>
    );
};

export default Deye;
