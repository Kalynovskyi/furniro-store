interface ButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    className?: string;
    id?: string;
}

interface OverlayProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface SliderData {
    activeSlide: number,
    itemWidth?: number | undefined,
    itemHeight?: number | undefined
    itemsAmount?: number;
    toSlide?: (activeSlide: number, nextSlide: number) => void;
}

interface InputProps {
    onChange?: ChangeEventHandler<T> | undefined;
    className?: string
    type: string;
    placeholder?: string;
    id?: string;
    checked?: boolean
    value?: string | number | null;
}
