import "./SeccionMarcas.css"
import deye from "/src/assets/deye.png";
import growatt from "/src/assets/growatt.png";
import ezviz from "/src/assets/ezviz.png";
import amarisolar from "/src/assets/amerisolar_logo.png";

const SeccionMarcas = () => {
    return (
        <div className='seccionmarcas'>
            <a href="#" target="_blank" rel="noopener noreferrer" className='imagen'>
                <img className='logo-img' src={deye} alt="logo" srcset="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className='imagen'>
                <img className='logo-img' src={growatt} alt="logo" srcset="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className='imagen'>
                <img className='logo-img' src={ezviz} alt="logo" srcset="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className='imagen'>
                <img className='logo-img' src={amarisolar} alt="logo" srcset="" />
            </a>
        </div>
    )
}

export default SeccionMarcas;