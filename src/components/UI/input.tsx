

const Input = (props: InputProps) => {

    const className = props.className ? props.className : '';

    return(
        <input type={props.type} id={props.id} placeholder={props.placeholder} className={`rounded-lg border border-secondary-color py-6 px-7 ${className}`}/>
    )
}

export default Input;