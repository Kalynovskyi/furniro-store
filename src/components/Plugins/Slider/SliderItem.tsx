interface SliderItemProps {
    children: React.ReactNode;
    className?: string;
}

export function SliderItem(props: SliderItemProps) {
    const className = props.className || '';
    return (
        <div className={`${className}  slider-item `} > {props.children} </div>
    );
}
