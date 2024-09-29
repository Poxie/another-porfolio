import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 800;
export default function useIsSticky() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY >= SCROLL_THRESHOLD) {
                setIsSticky(true);
                return;
            }
            setIsSticky(false);
        }
        onScroll();

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return isSticky;
}