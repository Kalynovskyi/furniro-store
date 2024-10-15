
const Button = (props: ButtonProps) => {
    const className = props.className ? props.className : '';
    const buttonType = props.type ? props.type : 'button';
    
    return(
        <button onClick={props.onClick} type={buttonType} className={`bg-brand-color text-white py-6 px-72 hover:opacity-80 transition-all duration-300  ${className}`}>{props.children}</button>
    );
}

export default Button;