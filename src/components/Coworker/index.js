import React from'react';
import './Coworker.css';
const Coworker = ({nome,imagem,cargo}) => {
    return(
        <div className='coworker'>
            <div className='header'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='footer'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}
export default Coworker;