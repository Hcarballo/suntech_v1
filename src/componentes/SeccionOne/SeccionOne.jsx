import "./SeccionOne.css"
import logo from "/src/assets/Logos/logo_SunTech.png";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const SeccionOne = () => {
    const frase = "<<Soluciones solares, futuro sostenible>>"
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true
        });
      }, []);
    return (
        <div className="seccionone" id="inicio">
           
        </div>
    )
}
export default SeccionOne