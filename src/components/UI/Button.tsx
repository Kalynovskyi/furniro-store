
const Button = (props: ButtonProps) => {
    let className = props.className ? props.className : '';
    const buttonType = props.type ? props.type : 'button';

    if (!className.includes('text-')) {
        className = className + ' text-white'
    }

    if (!className.includes('bg-')) {
        className = className + ' bg-brand-color'
    }
    
    return(
        <button onClick={props.onClick} type={buttonType} className={`${className} py-6 px-72 hover:opacity-80 transition-all duration-300 `}>{props.children}</button>
    );
}

export default Button;