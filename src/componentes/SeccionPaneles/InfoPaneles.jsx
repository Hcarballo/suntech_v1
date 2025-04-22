import './SeccionPaneles.css';
import suntech_logo from "../../assets/Logos/logo_SunTech_2.png";
import paso1 from "../../assets/Info/Paneles/paso_1_paneles.png";
import paso2 from "../../assets/Info/Paneles/paso_2_paneles.png";
import paso3 from "../../assets/Info/Paneles/paso_3_paneles.png";
import paso4 from "../../assets/Info/Paneles/paso_4_paneles.png";
import paso5 from "../../assets/Info/Paneles/paso_5_paneles.png";
import paso6 from "../../assets/Info/Paneles/paso_6_paneles.png";
import { useNavigate } from 'react-router-dom';

const InfoPaneles = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar con logos */}
      <div className="sticky-top bg-white py-3 shadow-sm z-3">
        <div className="d-flex justify-content-between align-items-center container">
          <img src={suntech_logo} alt="Suntech Logo" className='marcas_logo' />
        </div>
      </div>
      {/* Texto introductorio sobre energía solar */}
      <div className="container my-5">
        <div className="text-center">
          <h2 className="mb-4">Energía solar para hogares e industrias</h2>
          <p className="lead">
            En SunTech, transformamos la luz del sol en soluciones energéticas inteligentes.
            Ofrecemos instalaciones solares personalizadas tanto para viviendas particulares como para industrias,
            ayudando a reducir costos, cuidar el planeta y alcanzar independencia energética.
            </p>
            <br />
            <p className="lead">
            Apostar por la energía solar no solo es una decisión ecológica, sino también económica.
            Te acompañamos en cada paso del proceso para que tu transición hacia una energía limpia sea simple,
            segura y efectiva.
          </p>
        </div>
      </div>

      {/* Sección de instalación de paneles */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">¿Como lo hacemos?</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <img src={paso1} alt="Paso 1" className="img_pasos" />
            <h5 className="mt-3">Paso 1:Entrevista y Evaluación del sitio</h5>
            <p>Antes de comenzar, escuchamos tus necesidades energéticas y analizamos tu consumo actual. Revisamos tu factura de luz y evaluamos las condiciones del lugar para garantizar la viabilidad técnica de la instalación solar.</p>
          </div>
          <div className="col-md-6">
            <img src={paso2} alt="Paso 2" className="img_pasos" />
            <h5 className="mt-3">Paso 2: Preparación del Presupuesto</h5>
            <p>Realizamos un estudio personalizado utilizando software especializado para simular el rendimiento del sistema solar. Calculamos el ahorro estimado, el tiempo de retorno de la inversión y te presentamos una propuesta clara y detallada.</p>
          </div>
          <div className="col-md-6">
            <img src={paso3} alt="Paso 3" className="img_pasos" />
            <h5 className="mt-3">Paso 3: Modelado en 3d</h5>
            <p>Diseñamos una maqueta virtual en 3D donde podés visualizar cómo quedará instalada la solución solar en tu espacio. Esto incluye la ubicación de los paneles, el inversor y las baterías si el sistema las requiere.</p>
          </div>
          <div className="col-md-6">
            <img src={paso4} alt="Paso 4" className="img_pasos" />
            <h5 className="mt-3">Paso 4: Instalación</h5>
            <p>Nuestro equipo técnico realiza la instalación completa: montaje de paneles, conexión de inversores y baterías, y adecuación del sistema a tu red eléctrica. Todo con materiales certificados y máxima eficiencia.</p>
          </div>
          <div className="col-md-6">
            <img src={paso5} alt="Paso 5" className="img_pasos" />
            <h5 className="mt-3">Paso 5: Puesta en marcha, configuración y pruebas</h5>
            <p>Encendemos el sistema, configuramos los equipos y realizamos pruebas funcionales para asegurar que todo esté operando correctamente. Te enseñamos cómo monitorear tu energía en tiempo real.</p>
          </div>
          <div className="col-md-6">
            <img src={paso6} alt="Paso 6" className="img_pasos" />
            <h5 className="mt-3">Paso 6: Monitoreo</h5>
            <p>Desde la plataforma web, hacemos un seguimiento remoto del sistema. Optimizamos el rendimiento, aplicamos ajustes cuando es necesario y te mantenemos informado sobre el estado de tu generación solar.</p>
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

export default InfoPaneles;
