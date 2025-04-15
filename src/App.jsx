import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/NavBar/NavBar';
import SeccionOne from "./componentes/SeccionOne/SeccionOne";
import SeccionPaneles from "./componentes/SeccionPaneles/SeccionPaneles";
import SeccionCamara from "./componentes/SeccionCamara/SeccionCamara";
import SeccionTanques from "./componentes/SeccionTanques/SeccionTanques";
import SeccionBombas from "./componentes/SeccionBombas/SeccionBombas";
import SeccionMantas from "./componentes/SeccionMantas/SeccionMantas"
import SeccionThree from "./componentes/SeccionThree/SeccionThree";
import SeccionNosotros from "./componentes/SeccionNosotros/SeccionNosotros";
import SeccionMarcas from "./componentes/SeccionMarcas/SeccionMarcas";
import SeccionTrabajos from "./componentes/SeccionTrabajos/SeccionTrabajos";
import SeccionContacto from "./componentes/SeccionContacto/SeccionContacto";


const App = () => {
  return (
    <div>
      <Navbar />      
      <SeccionOne />
      <SeccionPaneles />
      <SeccionCamara />     
      <SeccionTanques />
      <SeccionBombas />
      <SeccionMantas />
      <SeccionThree />
      <SeccionMarcas />
      <SeccionTrabajos />
      <SeccionNosotros />
      <SeccionContacto />      
    </div>
  )
}

export default App