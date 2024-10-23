import { useEffect, useRef, useState, Children } from "react";

interface SliderProps {
    children: React.ReactNode;
    isImageLoaded?: boolean;
    getSlideData?: (arg: SliderData) => void;
}

export function Slider(props: SliderProps) {
    const slider = useRef<HTMLInputElement>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [sliderItemWidth, setSliderItemWidth] = useState<
        number | undefined
    >();
    const [sliderItemHeight, setSliderItemHeight] = useState<
        number | undefined
    >();
    const [sliderStagePosition, setSliderStagePosition] = useState<number>(0);
    const sliderItemsAmount = Children.count(props.children);

    useEffect(() => {
        if (props.isImageLoaded) {
            if (slider.current === null) return;

            const sliderItems =
                slider.current.querySelectorAll<HTMLElement>(".slider-item");

            for (let i = 0; i < sliderItems.length; i++) {
                if (sliderItemWidth === undefined) {
                    setSliderItemWidth(sliderItems[i].offsetWidth);
                }
                if (sliderItemHeight === undefined) {
                    setSliderItemHeight(sliderItems[i].offsetHeight);
                }
            }
        }
    }, [
        props.isImageLoaded,
        activeSlide,
        props,
        sliderItemWidth,
        sliderItemHeight,
    ]);

    /*Slider navigation logic*/
    const toSlide = (activeSlide: number, nextSlide: number, paddingValue: number = 24) => {
        if (sliderItemWidth === undefined || nextSlide === activeSlide) return;

        const newPosition = -((sliderItemWidth + paddingValue) * nextSlide);

        setActiveSlide(nextSlide);
        setSliderStagePosition(newPosition);
    };

    const handleNextSlideClick = () => {
        toSlide(activeSlide, activeSlide + 1);
    };

    const handlePrevSlideClick = () => {
        toSlide(activeSlide, activeSlide - 1);
    };

    const handleNavDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        const nextSlide = target.dataset.slide;

        if (nextSlide === undefined) throw new Error("Next slide is undefined"); ; 

        toSlide(activeSlide, +nextSlide);
    };
    /*Slider dots creation*/
    const createSliderNavDots = () => {
        const dots = [];
        for (let i = 0; i < sliderItemsAmount; i++) {
            dots.push(
                <div
                    key={i}
                    className="h-4 w-4 bg-black cursor-auto"
                    data-slide={i}
                    onClick={handleNavDotClick}
                ></div>
            );
        }

        return dots;
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
                {activeSlide !== sliderItemsAmount - 1 && (
                    <div
                        className="next bg-brand-color cursor-pointer absolute top-1/2 right-0"
                        onClick={handleNextSlideClick}
                    >
                        Next
                    </div>
                )}
                {activeSlide !== 0 && (
                    <div
                        className="prev bg-brand-color cursor-pointer absolute top-1/2 left-0"
                        onClick={handlePrevSlideClick}
                    >
                        Prev
                    </div>
                )}
            </div>

            <div className="slider-nav-dots flex space-x-4">
                {createSliderNavDots()}
            </div>
        </div>
    );
}
