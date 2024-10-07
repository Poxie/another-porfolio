import { useEffect, useState } from "react";

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export default function useScreenSize() {
    const [screenSize, setScreenSize] = useState<ScreenSize>('xl');

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 640) {
                setScreenSize('xs');
            } else if(window.innerWidth < 768) {
                setScreenSize('sm');
            } else if(window.innerWidth < 1024) {
                setScreenSize('md');
            } else if(window.innerWidth < 1280) {
                setScreenSize('lg');
            } else {
                setScreenSize('xl');
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSize;
}