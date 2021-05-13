import React from "react";
import {Link} from "react-router-dom";
const Card = () =>{
    return(
        <>
            <h2>Últimos lançamentos</h2>
            <div className="card">
                <div className="thumb">
                    <img src="imagens/capas/9788575228142.jpg" alt=""/>
                </div>
                <div className="detalhes">
                    <h3>Padrões para Kubernetes</h3>
                    <p>O modo como os ...</p>
                    <Link to="/">Leia mais &gt;</Link>
                </div>
            </div>
        </>
    );
}
export default Card;