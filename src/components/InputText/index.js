import './InputText.css';

const InputText = (props) => {

    

    const onType = (e) =>{
        props.onOnChange(e.target.value);
    }

    return(
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={onType} required={props.require} placeholder={props.placeholder}/>
        </div>
    )
}
export default InputText;