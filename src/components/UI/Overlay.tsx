
export function Overlay(props: OverlayProps) {
  const className = props.className ? props.className : '';
  
  return <div onClick={props.onClick} className={`${className} w-full h-full absolute top-0 overlay transition-all duration-300 bg-(3A3A3A,.7)`}>{props.children}</div>;
}
  