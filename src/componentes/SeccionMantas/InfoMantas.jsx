import './SeccionMantas.css';
import suntech_logo from "../../assets/Logos/logo_suntech_2.png";
import paso1 from "../../assets/Info/Mantas/paso_1_mantas.webp";
import paso2 from "../../assets/Info/Mantas/paso_2_mantas.png";
import paso3 from "../../assets/Info/Mantas/paso_3_mantas.png";
import paso4 from "../../assets/Info/Mantas/paso_4_mantas.png";
import { useNavigate } from 'react-router-dom';

const InfoMantas = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar con logos */}
      <div className="fixed-top bg-white py-3 z-3">
        <div className="d-flex justify-content-between align-items-center container">
          <img src={suntech_logo} alt="Suntech Logo" className='marcas_logo' />
        </div>
      </div>

      {/* Descripción introductoria */}
      <div className="container my-5">
        <div className="text-center">
          <h2 className="mb-4">Bombas de calor Wega Energy: ¿qué son y cómo funcionan?</h2>
          <p className="lead">
            Una bomba de calor es un dispositivo eléctrico con tecnología inverter, que utiliza el principio de la aerotermia para extraer energía térmica del aire y transferirla al agua mediante un intercambiador de calor.
            Cuando el equipo consume 1Kw de energía, entrega 9Kw de energía en forma de calor hacia la pileta. Este sistema eficiente permite obtener calefacción de manera sencilla, económica y respetuosa con el medio ambiente, proporcionando una temperatura ideal durante todas las estaciones del año.
          </p>
          <p className="lead">
            En <strong>SunTech</strong> instalamos estas Bombas inverter, que se conectan al sistema de filtrado existente. El agua circula por la bomba, absorbe el calor del ambiente y regresa a la pileta, elevando su temperatura gradualmente.
          </p>
          <p className="lead">
            Diseñamos soluciones personalizadas para cada tipo de pileta, optimizando el rendimiento según la ubicación, el tamaño y el uso. Una inversión inteligente que mejora tu confort.
          </p>
        </div>
      </div>

      {/* Pasos de instalación */}
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-md-6">
            <img src={paso1} alt="Paso 1" className="img_pasos" />
            <h5 className="mt-3">Bombas de calor Wega Energy: ¿de qué se trata esta solución de energía renovable?</h5>
            <p>Una bomba de calor es un dispositivo eléctrico con tecnología inverter, que utiliza el principio de la aerotermia para extraer energía térmica del aire y transferirla al agua mediante un intercambiador de calor.
              Cuando el equipo consume 1Kw de energía, entrega 9Kw de energía en forma de calor hacia la pileta. Este sistema eficiente permite obtener calefacción de manera sencilla, económica y respetuosa con el medio ambiente, proporcionando una temperatura ideal durante todas las estaciones del año.</p>
          </div>
          <div className="col-md-6">
            <img src={paso2} alt="Paso 2" className="img_pasos" />
            <h5 className="mt-3">¿Cómo funciona?</h5>
            <p>La bomba de calor Wega Energy para climatización de piscinas trabaja al 100% de su capacidad al inicio para lograr una rápida climatización. Una vez alcanzada la temperatura deseada, el compresor regula su velocidad, asegurando un ahorro significativo de energía durante su funcionamiento continuo.
              Este tipo de bomba de calor es aire-agua, este sistema de aerotermia aprovecha el calor presente en el aire exterior y lo transfiere a un circuito de agua que alimenta el sistema de calefacción.</p>
          </div>
          <div className="col-md-6">
            <img src={paso3} alt="Paso 3" className="img_pasos" />
            <h5 className="mt-3">Controlá la bomba de calor Wega Energy desde tu celular</h5>
            <p>Vas a tener la opción de controlar tu bomba de calor desde tu celular muy fácilmente ya que puede contar con un módulo Wi-Fi para monitoreo y programación remota. Tiene múltiples funciones, entre ellas el encendido y apagado, temporizador, y ajuste de temperatura. También, indica cuál es el estado de la calefacción y tiene la capacidad de compartir el control con otros dispositivos, mejorando aún más la experiencia.</p>
          </div>
          <div className="col-md-6">
            <img src={paso4} alt="Paso 4" className="img_pasos" />
            <h5 className="mt-3">Prueba, recomendaciones y mantenimiento</h5>
            <p>Probamos el sistema, te mostramos cómo operarlo y te damos consejos para mantenerlo en óptimas condiciones durante todo el año.</p>
          </div>
        </div>
        <div>
          <h5>Ventajas de las bombas de calor Wega Energy</h5>
          <ul className="beneficios-piscina">
            <li>
              <strong>Eficiencia energética:</strong>
              <span>
                Con un consumo de 1 kW eléctrico, las bombas de calor inverter Wega Energy
                pueden proporcionar hasta 9 kW de calor, alcanzando un COP promedio de 9.
              </span>
            </li>
            <li>
              <strong>Bajo nivel de ruido:</strong>
              <span>
                Su funcionamiento es similar al de una heladera, ya que el compresor
                trabaja en promedio al 50% de su capacidad, garantizando un ambiente tranquilo.
              </span>
            </li>
            <li>
              <strong>Energía renovable:</strong>
              <span>
                Utilizan aerotermia para aprovechar la energía presente en el aire,
                reduciendo el consumo energético y las emisiones de CO₂.
              </span>
            </li>
            <li>
              <strong>Instalación sencilla:</strong>
              <span>
                Su instalación es simple y económica en comparación con otros sistemas
                de calefacción, especialmente en piscinas sin instalaciones previas.
              </span>
            </li>
            <li>
              <strong>Vida útil prolongada:</strong>
              <span>
                Wega Energy ofrece 2 años de garantía y, con un mantenimiento adecuado,
                sus equipos pueden alcanzar una extensa vida útil.
              </span>
            </li>
          </ul>
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
