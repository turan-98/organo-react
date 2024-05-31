import Button from '../Button';
import { useState } from 'react';
import DropDown from '../DropDown';
import InputText from '../InputText';
import './Form.css'
const Form = () => {
    const times = [
        'xxx',
        'xx1',
    ]

    const [nome,setNome] = useState('');
    const [cargo,setCargo] = useState('');
    const [funcao,setFuncao] = useState('');
    const [time, setTime] = useState('');

    const onSave = (event) => {
        event.preventDefault();
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
                onOnChange={valor => setNome(valor)}
                />
                <InputText  
                valor={cargo}
                onOnChange={valor => setCargo(valor)}
                label="Cargo" 
                placeholder="Digite seu cargo" 
                require={true}
                />
                <InputText 
                valor={funcao}
                onOnChange={valor => setFuncao(valor)} 
                label="Função" 
                placeholder="Digite sua função" 
                require={true}
                />
                <DropDown 
                label="Time" 
                valor={time}
                onOnChange={valor => setTime(valor)}
                itens={times} 
                require={true}/>
                <Button>Enviar</Button>
            </form>
        </section>
    )
}
export default Form;