import "./SeccionEstadisticas.css"
import CountUp from 'react-countup';


const SeccionEstadisticas = () => {
    return (
        <div className="estadisticas">
            <div className="estadistica">
                <h2>PROYECTOS CONCRETADOS</h2>
                <span>+</span><CountUp start={0} end={16} duration={2} />
            </div>
            <div className="estadistica">
                <h2>POTENCIA INSTALADA</h2>
                <span>+</span><CountUp start={0} end={320} duration={2.5} suffix=" kW" />
            </div>   
            <div className="estadistica">
                <h2>PODUCCION ANUAL</h2>
                <span>+</span><CountUp start={0} end={480000} duration={3.5} suffix=" kW" />
            </div>         
            <div className="estadistica">
                <h2>REDUCCION CO₂</h2>
                <span>+</span><CountUp start={0} end={216000} duration={2.8} suffix=" kg" />
            </div>
        </div>
    )
}

export default SeccionEstadisticas