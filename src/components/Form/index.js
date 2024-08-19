import React from'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { useState } from 'react';
import DropDown from '../DropDown';
import InputText from '../InputText';
import './Form.css'

const Form = (props) => {
    
    const [nome,setNome] = useState('');
    const [cargo,setCargo] = useState('');
    const [funcao,setFuncao] = useState('');
    const [time, setTime] = useState('');
    const [imagem,setImagem] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.onSaveCoworker({
            nome,
            cargo,
            funcao,
            time,
            imagem
        });
        console.log("Envio do form", nome, cargo, funcao, time)
    }

    return(
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Preencha o card</h2> 
                <InputText  
                valor={nome}
                label="Nome" 
                placeholder="Digite seu nome" 
                require={true}
                onOnChange={valor => setNome(valor.replace(/\d/g, ''))}
                />
                <InputText  
                valor={cargo}
                onOnChange={valor => setCargo(valor.replace(/\d/g, ''))}
                label="Cargo" 
                placeholder="Digite seu cargo" 
                require={true}
                />
                <InputText 
                valor={funcao}
                onOnChange={valor => setFuncao(valor.replace(/\d/g, ''))} 
                label="Função" 
                placeholder="Digite sua função" 
                require={true}
                />
                 <InputText 
                valor={imagem}
                onOnChange={valor => setImagem(valor.replace(/\d/g, ''))} 
                label="Imagem" 
                placeholder="URL da imagem" 
                require={true}
                />
                <DropDown 
                label="Time" 
                valor={time}
                onOnChange={valor => setTime(valor)}
                itens={props.times} 
                require={true}/>
                <Button>Enviar</Button>
            </form>
        </section>
    )   
}
//validation for prop types
Form.propTypes = {
    onSaveCoworker: PropTypes.func.isRequired,
    times:PropTypes.func.isRequired
};

export default Form;