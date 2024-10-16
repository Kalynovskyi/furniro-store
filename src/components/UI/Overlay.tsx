
export function Overlay(props: OverlayProps) {
  const className = props.className ? props.className : '';
  
  return <div className={`${className} w-full h-full absolute top-0 overlay transition-all duration-300 opacity-0 bg-(3A3A3A,.7) group-hover/overlay:opacity-100`}>{props.children}</div>;
}
  