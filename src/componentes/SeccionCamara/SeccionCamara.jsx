import "./SeccionCamara.css"
import { useNavigate } from 'react-router-dom'

const SeccionCamara = () => {
  const navigate = useNavigate()
  return (
    <section className="seccioncamara" id="cam">
      <div className="overlayfour">
        <h1>Camaras de Seguridad</h1>
        <p>Protegé lo que más importa con cámaras de seguridad fotovoltaicas. Autónomas, fiables y ecológicas, estas cámaras utilizan energía solar para ofrecerte un monitoreo constante sin preocuparte por la energía.</p>
        <button onClick={() => navigate('/infocamaras')} className="btn btn-primary btninfo">
          Más info
        </button>
      </div>
    </section>
  )
}
export default SeccionCamara