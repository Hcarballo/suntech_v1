import "./SeccionEstadisticas.css"
import CountUp from 'react-countup';


const SeccionEstadisticas = () => {
    return (
        <div className="estadisticas">        
            <div className="estadistica">
                <h2>POTENCIA INSTALADA</h2>
                <span>+</span><CountUp start={0} end={730} duration={2.5} suffix=" kW" />
            </div>   
            <div className="estadistica">
                <h2>PODUCCION ANUAL</h2>
                <span>+</span><CountUp start={0} end={581500} duration={3.5} suffix=" kW" />
            </div>         
            <div className="estadistica">
                <h2>REDUCCION CO₂</h2>
                <span>+</span><CountUp start={0} end={340750} duration={2.8} suffix=" kg" />
            </div>
        </div>
    )
}

export default SeccionEstadisticas