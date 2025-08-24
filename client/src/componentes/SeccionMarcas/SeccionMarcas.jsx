import "./SeccionMarcas.css";
import deye from "../../assets/Logos/deye.png";
import growatt from "../../assets/Logos/growatt.png";
import ezviz from "../../assets/Logos/ezviz.png";
import amarisolar from "../../assets/Logos/amerisolar_logo.png";
import risen from "../../assets/Logos/logo_risen.png";

const SeccionMarcas = () => {

  return (
    <div className='seccionmarcas'>
      <div className='imagen'>
        <img className='logo-img' src={deye} alt="logo" />
      </div>
      <div className='imagen'>
        <img className='logo-img' src={growatt} alt="logo" />
      </div>
      <div className='imagen'>
        <img className='logo-img' src={ezviz} alt="logo" />
      </div>
      <div className='imagen'>
        <img className='logo-img' src={amarisolar} alt="logo" />
      </div>
      <div className='imagen'>
        <img className='logo-img' src={risen} alt="logo" />
      </div>
    </div>
  );
};

export default SeccionMarcas;