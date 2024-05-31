import "./style.css";

const Button = (props) => {
    return (
        //Tudo o que tiver dentro do botão será passado no props
        // pode ser ícones, imagem, ícones mais texto
        //só colocar o contéudo dentro das tags
        <button className="btn-active">{props.children}</button>
    )
}
export default Button;