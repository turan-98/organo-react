import "./style.css";

const Button = (props) => {
    return (
        <button className="btn-active">{props.label}</button>
    )
}
export default Button;