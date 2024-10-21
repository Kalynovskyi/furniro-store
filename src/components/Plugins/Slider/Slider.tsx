import { useEffect, useRef, useState, Children } from "react";

interface SliderProps {
    children: React.ReactNode;
    isImageLoaded?: boolean;
    getActiveSlide: (arg: number) => void;
}

export function Slider(props: SliderProps) {
    const slider = useRef<HTMLInputElement>(null);
    const [activeSlide, setActiveSlide] = useState<number>(1);
    const [sliderItemWidth, setSliderItemWidth] = useState<number>();
    const [sliderStagePosition, setSliderStagePosition] = useState<number>(0);
    const sliderItemsAmount = Children.count(props.children);

    props.getActiveSlide(activeSlide);

    useEffect(() => {
        if (props.isImageLoaded) {
            if (slider.current === null) return;

            const sliderItems =
                slider.current.querySelectorAll<HTMLElement>(".slider-item");

            sliderItems.forEach((element) => {
                setSliderItemWidth(element.offsetWidth);
            });
        }
    }, [props.isImageLoaded]);

    const onNextClick = () => {
        if (sliderItemWidth === undefined) return;
        const newPosition = sliderStagePosition - (sliderItemWidth + 24);
        setActiveSlide(activeSlide + 1);

        setSliderStagePosition(newPosition);
        props.getActiveSlide(activeSlide);
    };

    const onPrevClick = () => {
        if (sliderItemWidth === undefined) return;
        setSliderStagePosition(sliderStagePosition + (sliderItemWidth + 24));
        setActiveSlide(activeSlide - 1);
        props.getActiveSlide(activeSlide);
    };

    return (
        <div className="slider relative" ref={slider}>
            <div
                className="slider-stage flex space-x-6 transition-all duration-300"
                style={{ transform: `translateX(${sliderStagePosition}px)` }}
            >
                {props.children}
            </div>
            <div className="slider-nav-arrows">
                {activeSlide !== sliderItemsAmount && (
                    <div
                        className="next bg-brand-color cursor-pointer absolute top-1/2 right-0"
                        onClick={onNextClick}
                    >
                        Next
                    </div>
                )}
                {activeSlide !== 1 && (
                    <div
                        className="prev bg-brand-color cursor-pointer absolute top-1/2 left-0"
                        onClick={onPrevClick}
                    >
                        Prev
                    </div>
                )}
            </div>
        </div>
    );
}
