import './App.css';
import PrimerComponentes from './components/PrimerComponentes'
import Tarjetas from './components/Tarjetas'
import Navbar from "./components/Navbar";
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Routes>
       <Route path='/Home/' element={<PrimerComponentes/>} />
       <Route path='/Home/2' element={<Tarjetas/>}/>
       <Route path='/Home/3' element={<Navbar/>}/> 
    </Routes>

  );
}

export default App;