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
          <img 
            src={suntech_logo} 
            alt="Suntech Logo" 
            className='marcas_logo' 
          /> 
        </div> 
      </div> 
 
      {/* Introducción */} 
      <div className="container my-5"> 
        <div className="text-center"> 

          <h2 className="mb-4">
            Cargadores para autos eléctricos
          </h2> 

          <p className="lead"> 
            Cargá tu vehículo eléctrico de forma segura, rápida y eficiente 
            desde tu casa, empresa o establecimiento. Los cargadores para 
            vehículos eléctricos permiten disponer de una solución de carga 
            práctica y adaptada a las necesidades de cada usuario.
          </p> 

          <p className="lead"> 
            En <strong>SunTech</strong> realizamos instalaciones de cargadores 
            eléctricos, evaluando previamente la infraestructura disponible 
            y seleccionando la solución más adecuada según el vehículo, 
            la potencia requerida y las características del lugar.
          </p> 

          <p className="lead"> 
            Te acompañamos desde la evaluación de la instalación eléctrica 
            hasta la puesta en marcha del equipo, garantizando una instalación 
            segura, confiable y preparada para el uso diario.
          </p> 

        </div> 
      </div> 
 
      {/* Pasos de instalación */} 
      <div className="container mt-5"> 

        <h2 className="text-center mb-4">
          ¿Cómo instalamos el cargador?
        </h2> 

        <div className="row g-4"> 

          <div className="col-md-6"> 

            <img 
              src={paso1} 
              alt="Paso 1" 
              className="img_pasos"
            /> 

            <h5 className="mt-3">
              Paso 1: Evaluación de la instalación
            </h5> 

            <p>
              Analizamos la instalación eléctrica existente, la potencia 
              disponible y las características del lugar donde se instalará 
              el cargador. De esta manera determinamos la solución más 
              conveniente para cada vehículo y usuario.
            </p> 

          </div> 


          <div className="col-md-6"> 

            <img 
              src={paso2} 
              alt="Paso 2" 
              className="img_pasos" 
            /> 

            <h5 className="mt-3">
              Paso 2: Instalación del equipo
            </h5> 

            <p>
              Instalamos el cargador y la infraestructura eléctrica necesaria, 
              incorporando los conductores y sistemas de protección adecuados 
              para garantizar una carga segura y confiable.
            </p> 

          </div> 


          <div className="col-md-6"> 

            <img 
              src={paso3} 
              alt="Paso 3" 
              className="img_pasos" 
            /> 

            <h5 className="mt-3">
              Paso 3: Configuración y puesta en marcha
            </h5> 

            <p>
              Configuramos el cargador y realizamos las pruebas necesarias 
              para verificar su correcto funcionamiento. Comprobamos la carga 
              del vehículo y dejamos el sistema preparado para su utilización.
            </p> 

          </div> 


          <div className="col-md-6"> 

            <img 
              src={paso4} 
              alt="Paso 4" 
              className="img_pasos" 
            /> 

            <h5 className="mt-3">
              Paso 4: Capacitación y recomendaciones
            </h5> 

            <p>
              Te explicamos cómo utilizar correctamente el cargador, sus 
              principales funciones y las recomendaciones necesarias para 
              aprovechar al máximo el sistema y mantenerlo en óptimas 
              condiciones.
            </p> 

          </div> 

        </div> 
      </div> 
 
      {/* Beneficios */} 
      <div className="container my-5"> 

        <div className="text-center"> 

          <h2 className="mb-4">
            Ventajas de contar con un cargador propio
          </h2> 

          <p className="lead">
            Una infraestructura de carga propia brinda comodidad, seguridad 
            y mayor control sobre la energía utilizada para cargar tu vehículo.
          </p> 

        </div> 

        <div className="row g-4 mt-3"> 

          <div className="col-md-4"> 
            <div className="text-center p-3"> 

              <h5>
                Carga segura
              </h5> 

              <p>
                Contás con una instalación diseñada específicamente para 
                la carga del vehículo, con las protecciones eléctricas 
                correspondientes.
              </p> 

            </div> 
          </div> 


          <div className="col-md-4"> 
            <div className="text-center p-3"> 

              <h5>
                Mayor comodidad
              </h5> 

              <p>
                Podés cargar tu vehículo en tu propia casa, empresa o 
                establecimiento, sin depender exclusivamente de estaciones 
                de carga públicas.
              </p> 

            </div> 
          </div> 


          <div className="col-md-4"> 
            <div className="text-center p-3"> 

              <h5>
                Integración con energía solar
              </h5> 

              <p>
                El cargador puede integrarse con una instalación fotovoltaica 
                para aprovechar la energía generada por los paneles solares 
                y reducir el consumo de la red eléctrica.
              </p> 

            </div> 
          </div> 

        </div> 

      </div>
 
      {/* Botón para volver al inicio */} 
      <div 
        style={{ 
          textAlign: 'center', 
          marginTop: '2rem',
          marginBottom: '3rem'
        }}
      > 

        <button 
          className="btn btn-outline-primary" 
          onClick={() => navigate('/')}
        > 
          Volver al inicio
        </button> 

      </div> 

    </div> 
  ); 
}; 
 
export default InfoTanques;