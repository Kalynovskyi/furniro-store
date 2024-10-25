import { useEffect, useState } from "react";

const useResize = (callback: () => void) => {
    const [size, setSize] = useState([window.outerWidth, window.outerHeight]);

    useEffect(() => {
        
        const handleResize = () => {
            setSize([window.outerWidth, window.outerHeight]);
            console.log(size);
            callback();
        }

        window.addEventListener('resize', handleResize)

        return () => {window.removeEventListener('resize', handleResize)}
    }, [callback])

}

export default useResize;