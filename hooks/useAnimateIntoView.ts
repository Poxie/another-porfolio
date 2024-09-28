import { CSSProperties, RefObject, useEffect, useLayoutEffect, useRef } from "react";
import useIsWithinScroll from "./useIsWithinScroll";

export const DEFAULT_INITIAL_STATE = {
    opacity: 0,
    transform: 'translateY(30px)',
} as const;
const DEFAULT_STATE = {
    opacity: 1,
    transform: 'translateY(0px)',
} as const;
const DEFAULT_DELAY = 0;
const DEFAULT_DURATION = 600;
const DEFAULT_THRESHOLD = .7;
export default function useAnimateIntoView(ref: RefObject<HTMLElement>, { 
    delay=DEFAULT_DELAY,
    duration=DEFAULT_DURATION, 
    threshold=DEFAULT_THRESHOLD, 
    initialState=DEFAULT_INITIAL_STATE,
    state=DEFAULT_STATE,
    siblingRef,
}: {
    delay?: number;
    duration?: number;
    threshold?: number;
    state?: CSSProperties;
    initialState?: CSSProperties & {
        opacity: number;
    };
    siblingRef?: RefObject<HTMLElement>;
} | undefined = {}) {
    const isVisible = useIsWithinScroll(ref, { siblingRef, threshold });

    const addStyles = (styles: CSSProperties) => {
        Object.entries(styles).forEach(([property, value]) => {
            if(value === undefined) return;
            ref.current!.style.setProperty(property, value.toString());
        });
    }
    const addTransition = () => {
        const properties = [...Object.keys(state), ...Object.keys(initialState)];

        const uniqueProperties = [...new Set(properties)];
        const transitionProperties = uniqueProperties.map(property => `${property} ${duration}ms`);

        ref.current!.style.transition = transitionProperties.join(', ');
        ref.current!.style.transitionDelay = `${delay}ms`;
    }

    useEffect(() => {
        if(!ref.current) {
            console.error('useAnimateIntoView: ref is not defined');
            return;
        }

        if(!isVisible) {
            addStyles(initialState);
            addTransition();
        }

        if(isVisible) {
            addStyles(state);
        }
    }, [isVisible]);

    return { initialState };
}