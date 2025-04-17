import "./SeccionOne.css"
import logo from "/src/assets/logo_SunTech.png";

const SeccionOne = () => {
    const frase = "<<Soluciones solares, futuro sostenible>>"
    return (
        <div className="seccionone" id="inicio">
            <div className="tituloinicial">                    
                <img className='logo' src={logo} alt="logo" srcset="" />
                <h2 className="frase">{frase}</h2>                
            </div>          
        </div>
    )
}
export default SeccionOne