import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import Deye from './componentes/SeccionMarcas/Deye.jsx';
import Growatt from './componentes/SeccionMarcas/Growatt.jsx';
import Ezviz from './componentes/SeccionMarcas/Ezviz.jsx';
import Amerisolar from './componentes/SeccionMarcas/Amerisolar.jsx';
import ScrollToTop from './componentes/Utils/ScrollToTop.jsx';

import { HashRouter, Routes, Route } from 'react-router-dom';
import InfoBombas from './componentes/SeccionBombas/InfoBombas.jsx';
import InfoCamaras from './componentes/SeccionCamara/InfoCamaras.jsx';
import InfoMantas from './componentes/SeccionMantas/InfoMantas.jsx';
import InfoPaneles from './componentes/SeccionPaneles/InfoPaneles.jsx';
import InfoTanques from './componentes/SeccionTanques/InfoTanques.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/infobombas' element={<InfoBombas />} />
        <Route path='/infocamaras' element={<InfoCamaras />} />
        <Route path='/infomantas' element={<InfoMantas />} />
        <Route path='/infopaneles' element={<InfoPaneles />} />
        <Route path='/infotanques' element={<InfoTanques />} />
        <Route path='/deye' element={<Deye />} />
        <Route path='/growatt' element={<Growatt />} />
        <Route path='/ezviz' element={<Ezviz />} />
        <Route path='/amerisolar' element={<Amerisolar />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

