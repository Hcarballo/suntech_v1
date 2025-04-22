import { useNavigate } from 'react-router-dom'
import './SeccionPaneles.css';

const SeccionPaneles = () => {
  const navigate = useNavigate()
  return (
    <section className="seccionpaneles" id='pnls'>         
        <div className="overlayfour">
          <h1>Instalaciones Fotovoltaicas</h1>
          <p>Decile chau a los cortes de luz y al gasto innecesario. Instalamos sistemas solares que cuidan tus equipos, bajan tu factura y te dan autonomía energética real. Eficiencia, seguridad y ahorro en una sola solución</p>
          <button onClick={() => navigate('/infopaneles')} className="btn btn-primary btninfo">
          Más info
        </button>      
        </div> 
    </section>
  )
}
export default SeccionPaneles;