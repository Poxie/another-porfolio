import { RefObject, useEffect, useState } from "react";

const DEFAULT_THRESHOLD = .7;
export default function useIsWithinScroll(ref: RefObject<HTMLElement>, options?: {
    threshold?: number;
    siblingRef?: RefObject<HTMLElement>;
}) {
    const [visible, setVisible] = useState(false);

    const getSiblingVisible = () => {
        if(!options?.siblingRef?.current) return false;
        return getVisible(options.siblingRef);
    }

    const getVisible = (ref: RefObject<HTMLElement>) => {
        if(!ref.current) return false;
        if(window.getComputedStyle(ref.current).display === 'none') return false;

        const { top, height } = ref.current.getBoundingClientRect();
        return top / window.innerHeight <= (options?.threshold ?? DEFAULT_THRESHOLD);
    }
    
    useEffect(() => {
        if(!ref.current) {
            console.error('useIsWithinScroll: ref is not defined');
            return;
        }

        const onScroll = () => {
            if(!ref.current) return;
            
            const isVisible = getVisible(ref) || getSiblingVisible();

            setVisible(isVisible);

            if(isVisible) {
                window.removeEventListener('scroll', onScroll);
            }
        }
        onScroll();

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return visible;
}