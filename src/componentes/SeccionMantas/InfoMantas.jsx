import './SeccionMantas.css';
import suntech_logo from "../../assets/Logos/logo_suntech_2.png";
import paso1 from "../../assets/Info/Mantas/paso_1_mantas.png";
import paso2 from "../../assets/Info/Mantas/paso_2_mantas.png";
import paso3 from "../../assets/Info/Mantas/paso_3_mantas.png";
import paso4 from "../../assets/Info/Mantas/paso_4_mantas.png";
import { useNavigate } from 'react-router-dom';

const InfoMantas = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar con logos */}
      <div className="sticky-top bg-white py-3 shadow-sm z-3">
        <div className="d-flex justify-content-between align-items-center container">
          <img src={suntech_logo} alt="Suntech Logo" className='marcas_logo' />
        </div>
      </div>

      {/* Descripción introductoria */}
      <div className="container my-5">
        <div className="text-center">
          <h2 className="mb-4">Climatización de piletas con paneles solares</h2>
          <p className="lead">
            Aprovechá la energía del sol para extender la temporada de uso de tu pileta con un sistema de climatización eficiente, ecológico y de bajo mantenimiento.
          </p>
          <p className="lead">
            En <strong>SunTech</strong> instalamos mantas térmicas solares en el techo, que se conectan al sistema de filtrado existente. El agua circula por los paneles, absorbe el calor solar y regresa a la pileta, elevando su temperatura de forma natural.
          </p>
          <p className="lead">
            Diseñamos soluciones personalizadas para cada tipo de pileta, optimizando el rendimiento según la ubicación, el tamaño y el uso. Una inversión inteligente que mejora tu confort y reduce el consumo energético.
          </p>
        </div>
      </div>

      {/* Pasos de instalación */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">¿Cómo instalamos el sistema?</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <img src={paso1} alt="Paso 1" className="img_pasos" />
            <h5 className="mt-3">Paso 1: Preparación del techo</h5>
            <p>Analizamos y modelamos en 3d el área del techo donde se instalarán las mantas solares para asegurar una correcta fijación segura y eficiente.</p>
          </div>
          <div className="col-md-6">
            <img src={paso2} alt="Paso 2" className="img_pasos" />
            <h5 className="mt-3">Paso 2: Instalación de las mantas solares</h5>
            <p>Instalamos las mantas térmicas orientadas al sol, maximizando su exposición para lograr el mayor rendimiento térmico posible.</p>
          </div>
          <div className="col-md-6">
            <img src={paso3} alt="Paso 3" className="img_pasos" />
            <h5 className="mt-3">Paso 3: Conexión al sistema de la pileta</h5>
            <p>Integramos las mantas al sistema de filtrado y recirculación de la pileta, utilizando la bomba existente para impulsar el agua a través de los paneles.</p>
          </div>
          <div className="col-md-6">
            <img src={paso4} alt="Paso 4" className="img_pasos" />
            <h5 className="mt-3">Paso 4: Prueba, recomendaciones y mantenimiento</h5>
            <p>Probamos el sistema, te mostramos cómo operarlo y te damos consejos para mantenerlo en óptimas condiciones durante todo el año.</p>
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

export default InfoMantas;
