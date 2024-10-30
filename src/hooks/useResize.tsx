import { useEffect } from "react";

const useResize = (callback: () => void) => {

    useEffect(() => {

        const handleResize = () => {
            callback();
        };

        let timeOutFunctionId: number;

        window.addEventListener("resize", () => {
            clearTimeout(timeOutFunctionId);

            timeOutFunctionId = window.setTimeout(handleResize, 250);
        });

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [callback]);
};

export default useResize;
