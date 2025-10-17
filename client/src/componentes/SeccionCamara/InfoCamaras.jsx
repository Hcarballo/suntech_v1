import './SeccionCamara.css';
import suntech_logo from "../../assets/Logos/logo_suntech_2.png";
import paso1 from  "../../assets/Info/Camaras/paso_1_camaras.png"; // Reemplazalos por imágenes específicas si querés
import paso2 from "../../assets/Info/Camaras/paso_2_camaras.png";
import paso3 from "../../assets/Info/Camaras/paso_3_camaras.webp";
import paso4 from "../../assets/Info/Camaras/paso_4_camaras.png";
import { useNavigate } from 'react-router-dom';

const InfoCamaras = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar con logo */}
       <div className="fixed-top bg-white py-3 z-3">
        <div className="d-flex justify-content-between align-items-center container">
          <img src={suntech_logo} alt="Suntech Logo" className='marcas_logo' />
        </div>
      </div>

      {/* Introducción con formato unificado */}
      <div className="container my-5">
        <div className="text-center">
          <h2 className="mb-4">Sistemas de videovigilancia inteligentes</h2>
          <p className="lead">
            Las cámaras de seguridad son una herramienta clave para la protección de hogares, negocios e industrias.
            Te permiten tener control y tranquilidad, estés donde estés.
          </p>
          <p className="lead">
            En <strong>SunTech</strong> diseñamos soluciones personalizadas con cámaras de alta definición, IA y visión nocturna. Estas cuentan con acceso remoto desde el celular o la computadora. Nos ocupamos de todo el proceso: evaluación, instalación, configuración y soporte.
          </p>
        </div>
      </div>

      {/* Sección de instalación */}
      <div className="container mt-4">
        <h2 className="text-center mb-4">¿Cómo instalamos las cámaras?</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <img src={paso1} alt="Paso 1" className="img_pasos" />
            <h5 className="mt-3">Paso 1: Evaluación del sitio</h5>
            <p>Recorremos el lugar junto a vos para identificar los puntos estratégicos que aseguren cobertura completa y sin puntos ciegos. Consideramos la iluminación, ángulos y necesidades particulares.</p>
          </div>
          <div className="col-md-6">
            <img src={paso2} alt="Paso 2" className="img_pasos" />
            <h5 className="mt-3">Paso 2: Instalación física</h5>
            <p>Colocamos las cámaras en los puntos definidos, cuidando que la instalación sea segura, prolija y respetando la estética del lugar. Realizamos el cableado o configuración inalámbrica.</p>
          </div>
          <div className="col-md-6">
            <img src={paso3} alt="Paso 3" className="img_pasos"  />
            <h5 className="mt-3">Paso 3: Configuración</h5>
            <p>Configuramos la app, enlazamos las cámaras a la red y ajustamos los parámetros de grabación, detección de movimiento y alertas. Todo queda listo para comenzar a grabar.</p>
          </div>
          <div className="col-md-6">
            <img src={paso4} alt="Paso 4" className="img_pasos" />
            <h5 className="mt-3">Paso 4: Capacitación y prueba</h5>
            <p>Te explicamos cómo usar la app móvil y el sistema desde PC. Te enseñamos a ver en vivo, acceder a grabaciones, y dejamos todo funcionando al 100% para que puedas operar sin complicaciones.</p>
          </div>
        </div>
      </div>

      {/* Botón volver */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="btn btn-outline-primary" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default InfoCamaras;
