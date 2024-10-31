"use client";

import { useEffect, useState } from "react";

const useResize = (callback?: () => void) => {
    const [size, setSize] = useState([
        typeof window !== "undefined" ? window.outerWidth : 0,
        typeof window !== "undefined" ? window.outerHeight : 0,
    ]);

    useEffect(() => {
        const handleResize = () => {
            setSize([window.outerWidth, window.outerHeight]);

            if (typeof callback === "function") callback();
        };

        let timeOutFunctionId: number;

        window.addEventListener("resize", () => {
            clearTimeout(timeOutFunctionId);

            timeOutFunctionId = window.setTimeout(handleResize, 250);
        });

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [callback, size]);

    return size;
};

export default useResize;
