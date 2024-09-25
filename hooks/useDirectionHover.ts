import { useEffect } from "react";

export default function useDirectionHover(
    containerRef: React.RefObject<HTMLElement>,
    hoverRef: React.RefObject<HTMLElement>
) {
    useEffect(() => {
        if(!containerRef.current) return;

        containerRef.current.addEventListener('mouseenter', handleEnter);
        containerRef.current.addEventListener('mouseleave', handleLeave);

        return () => {
            if(!containerRef.current) return;

            containerRef.current.removeEventListener('mouseenter', handleEnter);
            containerRef.current.removeEventListener('mouseleave', handleLeave);
        }
    }, []);

    const getDistances = (e: MouseEvent) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        return {
            top: y,
            left: x,
            right: rect.width - x,
            bottom: rect.height - y,
        };
    }
    const getMouseSide = (e: MouseEvent) => {
        const distances = getDistances(e);
        
        return Object.keys(distances).reduce((a, b) => (
            distances[a as keyof typeof distances] < distances[b as keyof typeof distances] ? a : b
        ));
    }

    const clearTransition = () => {
        if(!hoverRef.current) return;
        hoverRef.current.style.transition = 'none';
    }
    const setTransition = () => {
        if(!hoverRef.current) return;
        hoverRef.current.style.transition = 'left .3s, top .3s';
    }
    const setStartingPositions = (side: string) => {
        if (!hoverRef.current) return;

        let left: string;
        if(side === 'left') {
            left = '-100%';
        } else if(['top', 'bottom'].includes(side)) {
            left = '0';
        } else {
            left = '100%';
        }

        let top: string;
        if(side === 'top') {
            top = '-100%';
        } else if(['left', 'right'].includes(side)) {
            top = '0';
        } else {
            top = '100%';
        }

        hoverRef.current.style.top = top;
        hoverRef.current.style.left = left;
    }
    const setActivePosition = () => {
        if(!hoverRef.current) return;

        hoverRef.current.style.left = '0';
        hoverRef.current.style.top = '0';
    }

    const handleEnter = (e: MouseEvent) => {
        if(!hoverRef.current) return;

        const entrySide = getMouseSide(e);

        clearTransition();
        setStartingPositions(entrySide);

        setTimeout(() => {
            if(!hoverRef.current) return;

            setTransition();
            setActivePosition();
        });
    };
    const handleLeave = (e: MouseEvent) => {
        if(!hoverRef.current) return;

        const exitSide = getMouseSide(e);

        setTransition();
        setStartingPositions(exitSide);
    };
}