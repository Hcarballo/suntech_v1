import './SeccionMantas.css';
import { useNavigate } from 'react-router-dom'

const SeccionMantas = () => {
  const navigate = useNavigate()
  return (
    <section className="seccionmantas" id='mant'>
      <div className="overlayfour">
        <h1>Climatización de Piscinas</h1>        
        <p>Disfrutá de tu pileta todo el año. Las mantas térmicas solares aprovechan la energía del sol para calentar el agua de tu pileta de manera eficiente. Reducí el consumo energético, evitá pérdidas de calor y mantené el agua a la temperatura perfecta sin gastar de más.</p>
        <button onClick={() => navigate('/infomantas')} className="btn btn-primary btninfo">
          Más info
        </button>     
      </div>
    </section>
  )
}

export default SeccionMantas