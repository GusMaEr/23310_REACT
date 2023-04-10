import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
//Importar Componentes
import NavbarPrincipal from './components/Navbar';
import Inicio from './components/Inicio';
import Agendas from './components/Agendas';
import Calendarios from './components/Calendarios';
import Cuadernos from './components/Cuadernos';

function App() {
  return (
      <div className='App'>
      <Router>
           <Routes>
                  <Route path='/' element={<NavbarPrincipal/>}>
                    <Route index element={ <Inicio />}/>
                    <Route path='Agendas' element={ <Agendas/>}/>
                    <Route path='Calendarios' element={ <Calendarios/>}/>
                    <Route path='Cuadernos' element={ <Cuadernos/>}/>
                    <Route path='*' element={ <Navigate remplace to="/" />}/>
                  </Route>
           </Routes>
          
      </Router>
      </div>
  );
}

export default App;