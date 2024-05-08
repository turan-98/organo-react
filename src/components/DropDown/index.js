import './DropDown.css'

// map aparece com muita frequência no react
// sempre que é necessário utilizar uma lista para devolver algo ou renderixar algo, utiliza-se o map
const DropDown = (props) => {
    return(
        <div className='dropdown'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default DropDown;