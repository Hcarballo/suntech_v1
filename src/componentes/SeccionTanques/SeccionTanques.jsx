import "./SeccionTanques.css"
import { useNavigate } from 'react-router-dom'

const SeccionTanques = () => {
    const navigate = useNavigate()
    return (
        <section className="secciontanques" id="tan">
            <div className="overlayfour">
              <h1>Cargadores para autos eléctricos</h1>
                <p>Recargá tu vehículo de forma rápida, segura y eficiente. Instalamos cargadores para autos eléctricos adaptados a las necesidades de tu hogar o empresa, para que tengas siempre tu vehículo listo para salir, aprovechando una carga práctica, confiable y sostenible.</p>
                <button onClick={() => navigate('/infotanques')} className="btn btn-primary btninfo">
                    Más info
                </button>
            </div>

        </section>
    )
}
export default SeccionTanques