interface ButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    className?: string;
}

interface OverlayProps {
    children?: React.ReactNode;
    className?: string;
}

interface SliderData {
    activeSlide?: number,
    itemWidth?: number | undefined,
    itemHeight?: number | undefined
}