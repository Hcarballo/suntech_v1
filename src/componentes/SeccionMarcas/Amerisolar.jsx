import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import "./SeccionMarcas.css";
import suntech_logo from '../../assets/Logos/logo_SunTech_2.png';
import marca_logo from '../../assets/Logos/amerisolar_logo.png';
import producto1 from '../../assets/Marcas/paneles.png';
import producto2 from '../../assets/Marcas/paneles.png';
import producto3 from '../../assets/Marcas/paneles.png';

const Amerisolar = () => {
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0); // 👈 esto asegura el scroll una vez montado
    }, []);
    
    const productos = [
        {
            img: producto1,
            titulo: 'AS-7M120-HC 460W MONOCRISTALINO',
            descripcion: [
                'Alta eficiencia de conversión de módulos de hasta el 21,26% mediante el uso de un innovador diseño de media celda y tecnología de celda de barra colectora múltiple (MBB)',
                'Coeficiente de baja temperatura y excelente rendimiento en condiciones de alta temperatura y poca luz',
                'El robusto marco de aluminio garantiza que los módulos soporten cargas de viento de hasta 2400 Pa y cargas de nieve de hasta 5400 Pa',
                'Alta fiabilidad frente a condiciones ambientales extremas (superando pruebas de niebla salina, amoníaco y granizo)',
                'Resistencia a la degradación inducida potencial (PID)',
            ],
            certificacion: ['IEC61215.IEC61730, CE', 'ISO9001:2015: Sistema de gestión de la calidad','ISO14001:2015: Sistema de gestión ambiental','ISO45001:2018: Sistema de gestión de seguridad y salud en el trabajo',],
            garantia: ['20 añosGarantía del producto','30 añosGarantía de salida de potencia lineal',],
        },
        {
            img: producto2,
            titulo: 'AS-7M144-BHC 550W MONOCRISTALINO',
             descripcion: [
                'Ganancia de hasta un 30% de más energía al utilizar la luz ambiental reflejada por las superficies circundantes',' Menor degradación anual de la energía y mayor rendimiento energético durante la vida útil del módulo.','Rendimiento superior en condiciones de alta temperatura y poca luz.','Alta capacidad de carga que puede soportar cargas de viento de hasta 2400 Pa y cargas de nieve de hasta 5400 Pa.','Excelente fiabilidad y durabilidad frente a condiciones ambientales extremas (alta resistencia a la niebla salina, amoníaco, arena, ácidos y álcalis, etc.).',' Libre de degradación inducida por potencial (PID).',
            ],
            certificacion: ['IEC61215.IEC61730, CE', 'ISO9001:2015: Sistema de gestión de la calidad','ISO14001:2015: Sistema de gestión ambiental','ISO45001:2018: Sistema de gestión de seguridad y salud en el trabajo',],
            garantia: ['20 añosGarantía del producto','30 añosGarantía de salida de potencia lineal',],
        },
        {
            img: producto3,
            titulo: 'AS-8M120-HC 580W',
            descripcion: [
                'Alta eficiencia de conversión de módulos de hasta el 21,38% mediante el uso de un innovador diseño de media celda y tecnología de celda de barra colectora múltiple (MBB).','Coeficiente de baja temperatura y excelente rendimiento en condiciones de alta temperatura y poca luz.','El robusto bastidor de aluminio garantiza que los módulos resistan cargas de viento de hasta 2400 Pa y cargas de nieve de hasta 5400 Pa.','Alta fiabilidad frente a condiciones ambientales extremas (superando las pruebas de niebla salina, amoníaco y granizo).','Resistencia a la degradación inducida potencial (PID).',
            ],
            certificacion: ['IEC61215.IEC61730, CE', 'ISO9001:2015: Sistema de gestión de la calidad','ISO14001:2015: Sistema de gestión ambiental','ISO45001:2018: Sistema de gestión de seguridad y salud en el trabajo',],
            garantia: ['20 añosGarantía del producto','30 añosGarantía de salida de potencia lineal',],
        },        
    ];

    return (
        <>
          {/* Header sticky con logos (full width) */}
          <div className="sticky-top bg-white py-3 shadow-sm z-3 w-100">
            <div className="container d-flex justify-content-between align-items-center">
              <img src={suntech_logo} alt="Logo Suntech" className="marcas_logo" />
              <img src={marca_logo} alt="Logo Marca" className="marcas_logo" />
            </div>
            <hr className="my-2" />
          </div>
      
          {/* Contenido principal con padding para evitar que quede oculto bajo el header */}
          <div className="container" style={{ paddingTop: '100px' }}>
            {productos.map((producto, index) => (
              <div className="row align-items-center my-5" key={index}>
                <div className="col-md-6 img_producto">
                  <img
                    src={producto.img}
                    alt={producto.titulo}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-md-6">
                  <h3>{producto.titulo}</h3>
      
                  <ul className="mt-3 ps-3">
                    {producto.descripcion.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
      
                  <ul className="mt-3 ps-3">
                    {producto.certificacion.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
      
                  <ul className="mt-3 ps-3">
                    {producto.garantia.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
      
            {/* Botón volver */}
            <div className="text-center mt-5">
              <button
                className="btn btn-primary"
                style={{ padding: '10px 20px', fontSize: '1rem' }}
                onClick={() => navigate('/')}
              >
                Volver al inicio
              </button>
            </div>
          </div>
        </>
      );
    }      

export default Amerisolar;
