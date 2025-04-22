import './SeccionBombas.css';
import suntech_logo from "../../assets/Logos/logo_SunTech_2.png";
import paso1_bomba from "../../assets/Info/Bombas/paso_1_bombas.png";
import paso2_bomba from "../../assets/Info/Bombas/paso_2_bombas.png";
import paso3_bomba from "../../assets/Info/Bombas/paso_3_bombas.png";
import paso4_bomba from "../../assets/Info/Bombas//paso_4_bombas.png";
import paso5_bomba from "../../assets/Info/Bombas/paso_5_bombas.png";
import paso6_bomba from "../../assets/Info/Bombas/paso_6_bombas.png";
import { useNavigate } from 'react-router-dom';

const InfoBombas = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar con logo */}
      <div className="sticky-top bg-white py-3 shadow-sm z-3">
        <div className="d-flex justify-content-between align-items-center container">
          <img src={suntech_logo} alt="Suntech Logo" className='marcas_logo' />
        </div>
      </div>

      {/* Introducción */}
      <div className="container my-5">
        <div className="text-center">
          <h2 className="mb-4">Soluciones solares para bombeo de agua</h2>
          <p className="lead">
            Las bombas solares permiten acceder al agua de forma autónoma, eficiente y sustentable en zonas rurales o sin red eléctrica estable.
          </p>
          <p className="lead">
            En <strong>SunTech</strong> desarrollamos sistemas personalizados para riego, ganadería o consumo domiciliario. Te acompañamos desde el diagnóstico hasta la instalación y el soporte técnico continuo.
          </p>
        </div>
      </div>

      {/* Pasos de instalación */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">¿Cómo instalamos las bombas solares?</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <img src={paso1_bomba} alt="Paso 1" className="img_pasos" />
            <h5 className="mt-3">Paso 1: Evaluación del sitio y necesidades</h5>
            <p>Relevamos el lugar, medimos la profundidad del pozo, el caudal necesario y el uso del agua. Esta información nos permite dimensionar el sistema adecuado.</p>
          </div>
          <div className="col-md-6">
            <img src={paso2_bomba} alt="Paso 2" className="img_pasos" />
            <h5 className="mt-3">Paso 2: Diseño del sistema solar</h5>
            <p>Seleccionamos la bomba ideal, el controlador, y los paneles necesarios en función de las horas de sol y la demanda de agua.</p>
          </div>
          <div className="col-md-6">
            <img src={paso3_bomba} alt="Paso 3" className="img_pasos" />
            <h5 className="mt-3">Paso 3: Presupuesto y simulación</h5>
            <p>Te entregamos un presupuesto detallado con simulaciones reales de funcionamiento, caudal esperado y proyección de ahorro energético.</p>
          </div>
          <div className="col-md-6">
            <img src={paso4_bomba} alt="Paso 4" className="img_pasos" />
            <h5 className="mt-3">Paso 4: Instalación del sistema</h5>
            <p>Instalamos paneles, bomba y sistema de control de forma segura, cumpliendo con estándares técnicos para un funcionamiento confiable y eficiente.</p>
          </div>
          <div className="col-md-6">
            <img src={paso5_bomba} alt="Paso 5" className="img_pasos" />
            <h5 className="mt-3">Paso 5: Puesta en marcha</h5>
            <p>Encendemos el sistema, realizamos pruebas de caudal, controlamos parámetros eléctricos y aseguramos el rendimiento óptimo del equipo.</p>
          </div>
          <div className="col-md-6">
            <img src={paso6_bomba} alt="Paso 6" className="img_pasos" />
            <h5 className="mt-3">Paso 6: Mantenimiento y soporte</h5>
            <p>Ofrecemos soporte técnico, mantenimiento periódico y, si lo deseás, monitoreo remoto para prolongar la vida útil del sistema.</p>
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

export default InfoBombas;
