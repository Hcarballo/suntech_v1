import '../../App.css';
import suntech_logo from "../../assets/Logos/logo_suntech_2.png";
import paso1 from "../../assets/Info/Termo/paso_1_tanques.png";
import paso2 from "../../assets/Info/Termo/paso_2_tanques.webp";
import paso3 from "../../assets/Info/Termo/paso_3_tanques.webp";
import paso4 from "../../assets/Info/Termo/paso_4_tanques.webp";
import { useNavigate } from 'react-router-dom';

const InfoTanques = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar con logos */}
       <div className="fixed-top bg-white py-3 z-3">
        <div className="d-flex justify-content-between align-items-center container">
          <img src={suntech_logo} alt="Suntech Logo" className='marcas_logo' />
        </div>
      </div>

      {/* Introducción */}
      <div className="container my-5">
        <div className="text-center">
          <h2 className="mb-4">Agua caliente todo el año con termotanques solares</h2>
          <p className="lead">
            Los termotanques solares son una solución eficiente, ecológica y de bajo consumo para disfrutar de agua caliente sin depender del gas o la electricidad.
          </p>
          <p className="lead">
            En <strong>SunTech</strong> instalamos sistemas adaptados a hogares, industrias o emprendimientos, aprovechando al máximo la radiación solar disponible en tu zona.
          </p>
          <p className="lead">
            Te acompañamos desde la evaluación del sitio hasta la puesta en marcha, brindando una instalación segura, duradera y con soporte técnico garantizado.
          </p>
        </div>
      </div>

      {/* Pasos de instalación */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">¿Cómo instalamos el sistema?</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <img src={paso1} alt="Paso 1" className="img_pasos"/>
            <h5 className="mt-3">Paso 1: Preparación del área</h5>
            <p>Limpiamos y nivelamos la superficie donde se instalará el termotanque solar, asegurando una base estable, firme y orientada al sol.</p>
          </div>
          <div className="col-md-6">
            <img src={paso2} alt="Paso 2" className="img_pasos" />
            <h5 className="mt-3">Paso 2: Instalación del equipo</h5>
            <p>Montamos la estructura, posicionamos el tanque y los tubos colectores solares, garantizando la orientación y ángulo correctos para el mayor rendimiento térmico.</p>
          </div>
          <div className="col-md-6">
            <img src={paso3} alt="Paso 3" className="img_pasos" />
            <h5 className="mt-3">Paso 3: Conexiones hidráulicas y pruebas</h5>
            <p>Conectamos el termotanque a la red de agua fría/caliente y realizamos pruebas de estanqueidad y funcionamiento.</p>
          </div>
          <div className="col-md-6">
            <img src={paso4} alt="Paso 4" className="img_pasos" />
            <h5 className="mt-3">Paso 4: Capacitación y recomendaciones</h5>
            <p>Te enseñamos cómo operar el sistema, cómo limpiarlo, y te damos recomendaciones para un mantenimiento fácil y prolongar su vida útil.</p>
          </div>
        </div>
      </div>

      {/* Botón para volver al inicio */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="btn btn-outline-primary" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default InfoTanques;
