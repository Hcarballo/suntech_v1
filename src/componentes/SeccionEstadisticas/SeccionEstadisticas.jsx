import "./SeccionEstadisticas.css"
import CountUp from 'react-countup';


const SeccionEstadisticas = () => {
    return (
        <div className="estadisticas">
            <div className="estadistica">
                <h2>PROYECTOS CONCRETADOS</h2>
                <span>+</span><CountUp start={0} end={16} duration={2.5} />
            </div>
            <div className="estadistica">
                <h2>POTENCIA INSTALADA</h2>
                <span>+</span><CountUp start={0} end={1200} duration={2} suffix=" kW" />
            </div>            
            <div className="estadistica">
                <h2>REDUCCION CO₂</h2>
                <span>+</span><CountUp start={0} end={87000} duration={3} suffix=" kg" />
            </div>
        </div>
    )
}

export default SeccionEstadisticas