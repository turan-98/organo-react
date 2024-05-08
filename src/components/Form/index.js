import Button from '../Button';
import DropDown from '../DropDown';
import InputText from '../InputText';
import './Form.css'
const Form = () => {
    const times = [
        'xxx',
        'xx1',
        'xx2',
        'xx3',
        'xx4',
        'xx5',
        'xx6',
        'xx7',
        'xx8',
        'xx9'
    ]

    return(
        <section className='formulario'>
            <form>
                <h2>Preencha o card</h2> 
                <InputText  label="Nome" placeholder="Digite seu nome"/>
                <InputText  label="Cargo" placeholder="Digite seu cargo"/>
                <InputText  label="Função" placeholder="Digite sua função"/>
                <DropDown label="Time" itens={times}/>
                <Button label="Enviar" />
            </form>
        </section>
    )
}
export default Form;