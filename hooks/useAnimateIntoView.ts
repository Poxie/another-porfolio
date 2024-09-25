import { CSSProperties, RefObject, useEffect, useLayoutEffect, useRef } from "react";
import useIsWithinScroll from "./useIsWithinScroll";

export const DEFAULT_INITIAL_STATE = {
    opacity: 0,
    transform: 'translateY(40px)',
} as const;
const DEFAULT_DELAY = 0;
const DEFAULT_DURATION = 600;
const DEFAULT_THRESHOLD = .7;
export default function useAnimateIntoView(ref: RefObject<HTMLElement>, { 
    delay=DEFAULT_DELAY,
    duration=DEFAULT_DURATION, 
    threshold=DEFAULT_THRESHOLD, 
    initialState=DEFAULT_INITIAL_STATE,
    siblingRef,
}: {
    delay?: number;
    duration?: number;
    threshold?: number;
    initialState?: CSSProperties & {
        opacity: number;
    };
    siblingRef?: RefObject<HTMLElement>;
} | undefined = {}) {
    const isVisible = useIsWithinScroll(ref, { siblingRef, threshold });

    useEffect(() => {
        if(!ref.current) {
            console.error('useAnimateIntoView: ref is not defined');
            return;
        }

        if(!isVisible) {
            ref.current.style.opacity = initialState.opacity.toString();
            ref.current.style.transform = initialState.transform || '';
            ref.current.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
            ref.current.style.transitionDelay = `${delay}ms`;
        }

        if(isVisible) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0px)';
        }
    }, [isVisible]);

    return { initialState };
}