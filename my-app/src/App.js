import './App.css';
import './css/Navbar.css';
import PrimerComponentes from './components/PrimerComponentes'
import Tarjetas from './components/Tarjetas'
import Navbar from "./components/Navbar";
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Navbar className='nav_Bar'>
        <Routes>
          <Route path='/' element={<PrimerComponentes/>} />
          <Route path='/1' element={<Navbar/>}/> 
          <Route path='/2' element={<Tarjetas/>}/>
        </Routes>
    </Navbar>
  );
}

export default App;