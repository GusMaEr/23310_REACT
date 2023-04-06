import React from "react";
import { Link as LinkRouter } from "react-router-dom";

const navBar =() => {
    return(
        
            //  <div className="menu">
            //      <button>Inicio</button>
            //      <button>Conferencia</button>                
            //      <button>Oradores</button>
            //      <button>Acerca de</button>
            //  </div>
    

        <>
           <LinkRouter to={'./Inicio'}>Inicio </LinkRouter>
           <LinkRouter to={'./Conferencia'}>Conferencia </LinkRouter>
           <LinkRouter to={'./Oradores'}>Oradores</LinkRouter>
            <LinkRouter to={'./Acerca de'}>Acerca de</LinkRouter>
        </>
       
      
    )
}
export default navBar;