import { useNavigate } from 'react-router-dom'
import './SeccionPaneles.css';

const InfoPaneles = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div style={{ padding: '2rem' }}>
                <h1>Más información</h1>
                <p>Acá podés contar en detalle sobre tus servicios, productos, o lo que quieras desarrollar.</p>
            </div>
            <button
                className="btn btn-secondary mt-4"
                onClick={() => navigate('/')}
            >
                Volver al inicio
            </button>
        </div>
    )
}

export default InfoPaneles