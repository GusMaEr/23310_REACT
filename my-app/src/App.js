import './App.css';
import PrimerComponentes from './components/PrimerComponentes'
import Tarjetas from './components/Tarjetas'
import Navbar from "./components/Navbar";
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
        <Routes>
   <div>
   <Navbar className='nav_Bar'/>
          <Route path='/' element={<PrimerComponentes/>} />
          <Route path='/1' element={<Navbar/>}/> 
          <Route path='/2' element={<Tarjetas/>}/>
    </div>
        </Routes>
    
  );
}

export default App;