import "./SeccionMarcas.css";
import { useNavigate } from 'react-router-dom';

const SeccionMarcas = () => {
  const navigate = useNavigate();

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