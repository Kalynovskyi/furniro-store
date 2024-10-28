import { useEffect, useRef, useState, Children, useCallback } from "react";
import useResize from "../../../hooks/useResize";

interface SliderProps {
    children: React.ReactNode;
    isImageLoaded?: boolean;
    getSliderData: (arg: SliderData) => void;
    className?: string;
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
    const className = props.className || "";

    const handleSliderItemSize = useCallback(() => {
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

    }, [sliderItemWidth, sliderItemHeight, props.isImageLoaded]);

    useEffect(() => {
        if (props.isImageLoaded) {
            const sliderData = {
                activeSlide: activeSlide,
                itemHeight: sliderItemHeight,
            };

            props.getSliderData(sliderData);

            handleSliderItemSize();
        }

        return () => {
            handleSliderItemSize();
        };
    }, [
        props.isImageLoaded,
        activeSlide,
        props,
        sliderItemWidth,
        sliderItemHeight,
        handleSliderItemSize,
    ]);

    /*Update slider on resize*/
    useResize(() => {
        setActiveSlide(0);
        setSliderStagePosition(0);
        handleSliderItemSize();
    });

    /*Slider navigation logic*/
    const toSlide = (
        activeSlide: number,
        nextSlide: number,
        itemGap: number = 24
    ) => {
        if (sliderItemWidth === undefined || nextSlide === activeSlide) return;

        const newPosition = -((sliderItemWidth + itemGap) * nextSlide);

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
        if (nextSlide === undefined) throw new Error("Next slide is undefined");

        toSlide(activeSlide, +nextSlide);
    };
    /*Slider dots creation*/
    const createSliderNavDots = () => {
        const dots = [];
        for (let i = 0; i < sliderItemsAmount; i++) {
            dots.push(
                <div
                    key={i}
                    className={`h-[27px] w-[27px] rounded-full cursor-pointer flex items-center justify-center ${
                        activeSlide === i ? `border-brand-color border` : ``
                    }`}
                    data-slide={i}
                    onClick={handleNavDotClick}
                >
                    <div
                        className={`h-[11px] w-[11px] rounded-full cursor-pointer ${
                            activeSlide === i
                                ? `bg-brand-color `
                                : `bg-[#D8D8D8]`
                        }`}
                        data-slide={i}
                    ></div>
                </div>
            );
        }

        return dots;
    };

    return (
        <div className={`slider relative ${className}`} ref={slider}>
            <div
                className={`slider-stage flex space-x-6 transition-all duration-300`}
                style={{ transform: `translateX(${sliderStagePosition}px)` }}
            >
                {props.children}
            </div>
            <div className="slider-nav-arrows">
                {activeSlide !== sliderItemsAmount - 1 && (
                    <div
                        className="next flex items-center justify-center bg-white w-12 h-12 rounded-full cursor-pointer absolute top-1/2 right-0 shadow-md"
                        onClick={handleNextSlideClick}
                    >
                        <svg
                            width="9"
                            height="16"
                            viewBox="0 0 9 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.00006 1L8.00006 8L1.00006 15"
                                stroke="#B88E2F"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                )}
                {activeSlide !== 0 && (
                    <div
                        className="next flex items-center justify-center bg-white w-12 h-12 rounded-full cursor-pointer absolute top-1/2 left-0 shadow-md"
                        onClick={handlePrevSlideClick}
                    >
                        <svg
                            className="rotate-180"
                            width="9"
                            height="16"
                            viewBox="0 0 9 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.00006 1L8.00006 8L1.00006 15"
                                stroke="#B88E2F"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                )}
            </div>

            <div className="slider-nav-dots lg:flex space-x-4 absolute -right-6 bottom-7 translate-x-full hidden">
                {createSliderNavDots()}
            </div>
        </div>
    );
}
