import "./SeccionTanques.css"
import { useNavigate } from 'react-router-dom'

const SeccionTanques = () => {
    const navigate = useNavigate()
    return (
        <section className="secciontanques" id="tan">
            <div className="overlayfour">
                <h1>Termotanques</h1>
                <p>Agua caliente todo el año sin gastar de más. Instalamos termotanques solares que aprovechan la energía del sol para brindarte confort, ahorro y autonomía. Olvidate del gas y de las boletas caras: es ecológico, eficiente y pensado para durar.</p>
                <button onClick={() => navigate('/infotanques')} className="btn btn-primary btninfo">
                    Más info
                </button>
            </div>

        </section>
    )
}
export default SeccionTanques