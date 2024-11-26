

const Input = (props: InputProps) => {

    const className = props.className ? props.className : '';
    const value = props.value === null ? '' : props.value;

    return(
        <input type={props.type} onChange={props.onChange} id={props.id} placeholder={props.placeholder} checked={props.checked} value={value} className={`rounded-lg border border-secondary-color py-6 px-7 ${className}`}/>
    )
}

export default Input;