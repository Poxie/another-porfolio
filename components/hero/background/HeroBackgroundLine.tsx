import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { HERO_SQUARE_SIZE } from ".";

export default function HeroBackgroundLine({ direction, index, highlight }: {
    direction: 'vertical' | 'horizontal';
    index: number;
    highlight?: boolean;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return(
        <div 
            className={twMerge(
                "absolute bg-secondary/60 transition-[height,width] duration-[2s] ease-in-out",
                highlight && 'bg-white/20',
                direction === 'vertical' && "w-[1px] h-0",
                direction === 'horizontal' && 'w-0 h-[1px]',
                mounted && direction === 'vertical' && 'h-full',
                mounted && direction === 'horizontal' && 'w-full',
            )} 
            style={{
                top: direction === 'horizontal' ? `${index * HERO_SQUARE_SIZE}px` : 0,
                left: direction === 'vertical' ? `${index * HERO_SQUARE_SIZE}px` : 0,
            }}
        />
    )
}