import './SeccionMantas.css';
import { useNavigate } from 'react-router-dom'

const SeccionMantas = () => {
  const navigate = useNavigate()
  return (
    <section className="seccionmantas" id='mant'>
      <div className="overlayfour">
        <h1>Climatización de Piscinas</h1>        
        <p>Disfrutá de tu pileta todo el año. Las bombas de calor Wega Energy para climatización de piscinas son la solución ideal para alargar la temporada de disfrute de tu pileta, proporcionando un ambiente cálido y confortable</p>
        <button onClick={() => navigate('/infomantas')} className="btn btn-primary btninfo">
          Más info
        </button>     
      </div>
    </section>
  )
}

export default SeccionMantas