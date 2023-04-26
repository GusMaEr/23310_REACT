import React from "react";
import "../css/Tarjeta.css"
import Jobs from "../assets/Imagenes/jobs.png";
import Ada from "../assets/Imagenes/Ada.png";
import Bill from "../assets/Imagenes/bill.jpg";
import codoAcodo from "../assets/Imagenes/codoacodo.png";

const Tarjetas = () => {
    return (
        <div className="oradores">
            <div className="tarjeta">
                <img src={Jobs} alt="Steve Jobs"/>
                <div className="botones">
                    <input type="button" value="JavaScript" className="btnAmarillo"/>
                    <input type="button" value="React" className="btnAzul"/>
                </div>
                <div>Steve Jobs</div>
                <div class="texto" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias illo expedita quae reprehenderit! Corporis tempora quas laudantium commodi voluptatem minima
                    voluptatum,
                    aliquam iusto dicta! Architecto perferendis eos est sit facilis
                </div>
            </div>
            <div class="tarjeta">
                <img src={Bill} alt="Bill Gate"/>
                <div class="botones">
                    <input type="button" value="JavaScript" class="btnAmarillo"/>
                    <input type="button" value="React" class="btnAzul"/>
                </div>
                <div>Bill Gates</div>
                <div class="texto" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias illo expedita quae reprehenderit! Corporis tempora quas laudantium commodi voluptatem minima
                    voluptatum,
                    aliquam iusto dicta! Architecto perferendis eos est sit facilis
                </div>
            </div>
            <div class="tarjeta">
                <img src={Ada} alt="Ada"/>
                <div class="botones">
                    <input type="button" value="JavaScript" class="btnAmarillo"/>
                    <input type="button" value="React" class="btnAzul"/>
                </div>
                <div>Ada</div>
                <div class="texto" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias illo expedita quae reprehenderit! Corporis tempora quas laudantium commodi voluptatem minima
                    voluptatum,
                    aliquam iusto dicta! Architecto perferendis eos est sit facilis
                </div>
            </div>
            <div class="tarjeta">
                <img src={codoAcodo} alt="codoAcodo"/>
                <div class="botones">
                    <input type="button" value="JavaScript" class="btnAmarillo"/>
                    <input type="button" value="React" class="btnAzul"/>
                </div>
                <div>Codo a Codo</div>
                <div class="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias illo expedita quae reprehenderit! Corporis tempora quas laudantium commodi voluptatem minima
                    voluptatum,
                    aliquam iusto dicta! Architecto perferendis eos est sit facilis
                </div>
            </div>
        </div>   
        )

}
export default Tarjetas
