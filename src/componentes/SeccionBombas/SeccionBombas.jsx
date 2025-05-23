import "./SeccionBombas.css"
import { useNavigate } from 'react-router-dom'

const SeccionBombas = () => {
  const navigate = useNavigate()
    return (
        <section className="seccionbombas" id="bom">
        <div className="overlayfour">
          <h1>Bombas de Agua</h1>
          <p>Soluciones solares para agua sin límites. Las bombas solares son perfectas para riego, ganado o llenado de piletas. Con una instalación simple y bajo costo operativo, asegurás el suministro de agua donde más lo necesitás, sin depender de la red eléctrica ni de combustibles.</p>
          <button onClick={() => navigate('/infobombas')} className="btn btn-primary btninfo">
          Más info
        </button>     
        </div>
      </section>
      )
}

export default SeccionBombas