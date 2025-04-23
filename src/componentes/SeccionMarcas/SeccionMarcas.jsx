import "./SeccionMarcas.css";
import deye from "/src/assets/Logos/deye.png";
import growatt from "/src/assets/Logos/growatt.png";
import ezviz from "/src/assets/Logos/ezviz.png";
import amarisolar from "/src/assets/Logos/amerisolar_logo.png";

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
    </div>
  );
};

export default SeccionMarcas;