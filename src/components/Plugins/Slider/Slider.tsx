import { SliderNavButtons } from "./SliderNavButtons";
import { SliderDots } from "./SliderDots";
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

    return (
        <div className={`slider relative ${className}`} ref={slider}>
            <div
                className={`slider-stage flex space-x-6 transition-all duration-300`}
                style={{ transform: `translateX(${sliderStagePosition}px)` }}
            >
                {props.children}
            </div>
            <SliderNavButtons
                activeSlide={activeSlide}
                itemsAmount={sliderItemsAmount}
                toSlide={toSlide}
            />

            <SliderDots
                itemsAmount={sliderItemsAmount}
                activeSlide={activeSlide}
                toSlide={toSlide}
            />
        </div>
    );
}
