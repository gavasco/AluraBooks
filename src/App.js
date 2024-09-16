import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/paginas/Home/Home';
import UltimosPedidos from './paginas/UltimosPedidos/UltimosPedidos'
import BarraNavegacao from './componentes/BarraNavegacao/BarraNavegacao';
import Rodape from './componentes/Rodape/Rodape';

function AppRouter() {
  return (
    <>
      <BarraNavegacao />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ultimos-pedidos' element={<UltimosPedidos />} />
      </Routes>
      <Rodape />
    </>
  );
}

export default AppRouter;
