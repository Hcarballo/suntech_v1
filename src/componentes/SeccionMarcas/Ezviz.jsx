import { useNavigate } from 'react-router-dom';
import './SeccionMarcas.css';
import suntech_logo from "/src/assets/Logos/logo_suntech_2.png";
import ezviz_logo from '../../assets/Logos/ezviz.png';
import producto1 from '../../assets/Marcas/ezviz_EB3.png';
import producto2 from '../../assets/Marcas/ezviz_BC1c_4k.png';
import producto3 from '../../assets/Marcas/ezviz_BC2.png';
import producto4 from '../../assets/Marcas/ezviz_EB5.png';

const productos = [
  {
    nombre: 'EZVIZ EB3',
    imagen: producto1,
    especificaciones: [
      'Modelo: CS-EB3 (3 MP)',
      'Resolución máxima: 2304 x 1296',
      'Lente: 2,8 mm f2.0; 131° diagonal, 110° horizontal, 58° vertical',
      'Visión nocturna: 15 m IR y en color',
      'Detección: Movimiento de formas humanas, zona de alerta personalizada',
      'Audio: Bidireccional, reducción de ruido 3D',
      'Almacenamiento: Tarjeta micro-SD hasta 256 GB, nube EZVIZ CloudPlay',
      'Grado IP: Resistente a la intemperie',
      'Batería: 5200 mAh',
      'Dimensiones: 105,9 x 62,8 x 62,8 mm',
    ],
    video: "https://www.youtube.com/embed/tdF9N6wbg2Y",
    datasheet: 'https://mfs.ezvizlife.com/EB3_%20Datasheet.pdf?ver=52475',
  },
  {
    nombre: 'EZVIZ eLife 2K',
    imagen: producto2,
    especificaciones: [
      'Modelo: CS-BC1c-R100-2F8WFL',
      'Resolución máxima: 3840*2160/4K/8MP',
      'Lente: 2,8 mm a f1.6; 135° (diagonal), 113° (horizontal) y 60° (vertical)',
      'Visión nocturna: Distancia del infrarrojo: 15 m. Distancia de la visión nocturna en color: 15 m',
      'Detección: Detección de forma humana con IA, detección de forma del vehículo con IA',
      'Audio: Bidireccional, reducción de ruido 3D',
      'Almacenamiento: Tarjeta micro-SD hasta 256 GB, nube EZVIZ CloudPlay',
      'Grado IP: IP65',
      'Batería: DC 5V/2A',
      'Dimensiones: 149.33 x 62.95 x 62.95 mm',
    ],
    video: 'https://www.youtube.com/embed/VS6mpfbW8NA',
    datasheet: 'https://mfs.ezvizlife.com/BC1C_4MP_datasheet.pdf?ver=52475',
  },
  {
    nombre: 'EZVIZ BC2',
    imagen: producto3,
    especificaciones: [
      'Modelo: CS-BC2 (A0-2C2WPFB)',
      'Resolución máxima: 1920 x 1080',
      'Lente: 4 mm a F1.6, ángulo de visión: 100°, 85° (diagonal) y 46° (horizontal)',
      'Visión nocturna: 5 m (16 ft) como máx',
      'Detección: Detección de forma humana con IA, detección de forma del vehículo con IA',
      'Audio: Bidireccional, reducción de ruido 3D',
      'Almacenamiento: Tarjeta micro-SD hasta 256 GB, nube EZVIZ CloudPlay',
      'Grado IP: IP65',
      'Batería: 5 VCC y 2 A',
      'Dimensiones: 51,3 x 39,1 x 39,1 mm',
    ],
    video: 'https://www.youtube.com/embed/mnXE4yzQMwY',
    datasheet: 'https://mfs.ezvizlife.com/BC2_datasheet.pdf?ver=52475',
  },

  {
    nombre: 'EZVIZ EB5',
    imagen: producto4,
    especificaciones: [
      'Modelo: CS-EB5-R100-2F8WFL',
      'Resolución máxima: 3840 × 2160',
      'Lente: 2.8mm F1.6; 135° (Diagonal), 113° (Horizontal), 60° (Vertical)',
      'Visión nocturna: IR Distance:15m, Color Night Vision Distance:15m',
      'Detección: Detección de forma humana con IA, detección de forma del vehículo con IA',
      'Audio: Bidireccional, reducción de ruido 3D',
      'Almacenamiento: Tarjeta micro-SD hasta 256 GB, nube EZVIZ CloudPlay',
      'Grado IP: IP65',
      'Batería: 10400 mAh',
      'Dimensiones: 166 × 103 × 54 mm',
    ],
    video: 'https://www.youtube.com/embed/SqDjYgvaLHU',
    datasheet: 'https://mfs.ezvizlife.com/20250115/EB5%204K_Datasheet.pdf?ver=52475',
  },

];

const Ezviz = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar con logos + línea */}
      <div className="sticky-top bg-white py-3 shadow-sm z-3">
        <div className="d-flex justify-content-between align-items-center container">
          <img src={suntech_logo} alt="Suntech Logo" className='marcas_logo' />
          <img src={ezviz_logo} alt="Ezviz Logo" className='marcas_logo' />
        </div>
        <hr className="my-1" />
      </div>
  
      {/* Contenido principal */}
      <div className="container py-5">
        {productos.map((producto, index) => (
          <div className="mb-5" key={index}>
            <h2 className="mb-4 text-center">{producto.nombre}</h2>
  
            <div className="row text-center align-items-start g-4">
              <div className="col-md-4 img_cam">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="img-fluid rounded shadow"
                />
              </div>
  
              <div className="col-md-4">
                <ul style={{ textAlign: 'left', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  {producto.especificaciones.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
  
                <div className="mt-3">
                  <a
                    href={producto.datasheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-sm d-inline-flex align-items-center gap-2"
                  >
                    <i className="bi bi-file-earmark-text"></i>
                    Datasheet
                  </a>
                </div>
              </div>
  
              <div className="col-md-4">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={producto.video}
                    title={`Video de ${producto.nombre}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className='video_marcas'
                  ></iframe>
                </div>
              </div>
            </div>
  
            <hr className="my-5" />
          </div>
        ))}
  
        <div className="text-center mt-5">
          <button className="btn btn-outline-primary" onClick={() => navigate('/')}>
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}  

export default Ezviz;


