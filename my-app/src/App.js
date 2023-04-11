import './App.css';
import { Route, Routes } from 'react-router-dom';
//Importar Componentes
import NavBar from './components/Navbar';
import Inicio from './components/Inicio';
import Agendas from './components/Agendas';
import Calendarios from './components/Calendarios';
import Cuadernos from './components/Cuadernos';

function App() {
  return (
    <>
      <NavBar/>
      
      <Routes>
         <Route path='/'element={ <Inicio />}/>
         <Route path='/Agendas' element={ <Agendas/>}/>
         <Route path='/Calendarios' element={ <Calendarios/>}/>
         <Route path='/Cuadernos' element={ <Cuadernos/>}/>
       </Routes>
          
   

    </>
  );
}

export default App;