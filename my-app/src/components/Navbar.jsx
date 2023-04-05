import React from "react";
import "../css/Navbar.css";
import { Link as LinkRouter } from "react-router-dom";

const navBar =() => {
    return(
         <navBar className="nav_bar">
             <div className="menu">
                 <button>Inicio</button>
                 <button>Conferencia</button>                
                 <button>Oradores</button>
                 <button>Acerca de</button>
             </div>
         </navBar>
    
        //  <div>
        //      <LinkRouter to='./Inicio'/>
        //      <LinkRouter to='./Conferencia'/>
        //      <LinkRouter to='./Oradores'/>
        //      <LinkRouter to='./Acerca de'/>
        //  </div>
      
    )
}
export default navBar;