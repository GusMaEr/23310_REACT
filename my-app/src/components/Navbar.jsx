import React from "react";
import "../css/Navbar.css";

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
    
    )
}
export default navBar;