import React from "react";
import "../css/Tarjeta.css"
import { Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
//imagenes
import Agendas from "../assets/Imagenes/Sakura/sakuraAgendas.png";
import Calendarios from "../assets/Imagenes/Sakura/sakuraCalendario.png";
import Cuadernos from "../assets/Imagenes/Sakura/sakuraCuadernos.png";


const Tarjetas = () => {
    return (
        <div className="oradores">
            <div className="tarjeta">
                <img src={Agendas} alt="Agendas" />
                <div className="botones">
                    <Nav.Link as={Link} to="/Agendas" className="btnAmarillo">Agendas</Nav.Link>
                </div>
                <div class="texto" >Agenda Docente con tapas personalizadas. <br/> Permite registrar información de distintas escuelas.
                La sección de calificaciones se encuentra troquelada para que escribas los nombres de los estudiantes sólo una vez!
                </div>
            </div>
            <div className="tarjeta">
                <img src={Cuadernos} alt="Cuadernos"/>
                <div className="botones">
                    <Nav.Link as={Link} to="/Cuadernos" className="btnAmarillo" >Cuadernos</Nav.Link>
                </div>
                <div class="texto" >Cuaderno tapa dura personalizado de Minnie. Tamaño A5. 🌸<br/>Tapas personalizadas.♥️<br />
                El interior tambien tiene diseños de Minnie y las hojas se encuentran combinadas entre rayadas y pentagramadas. 📖<br />
                En este cuaderno incluímos tambien un lápiz plantable (contiene semillas de radicheta)
                </div>
            </div>
            <div className="tarjeta">
                <img src={Calendarios} alt="calendarios"/>
                <div className="botones">
                    <Nav.Link as={Link} to="/Calendarios" className="btnAmarillo" >Calendarios</Nav.Link>
                </div>
                <div className="texto" >Planificador semanal "Sarah Kay"
                Impreso entamaño A4 en hojas de 90gr. 🌺<br/>
                Formato de bloc (encolado)🧡<br/>
                Cuenta con 55 hojas para que puedas planificar tus actividades de cada semana del año, pudiendo sacar la hoja ya utilizada y contar con una nueva.
                </div>
            </div>
            
        </div>   
        )

}
export default Tarjetas
