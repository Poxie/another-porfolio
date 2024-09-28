import { twMerge } from "tailwind-merge";
import HeroBackgroundLine from "./HeroBackgroundLine";
import { forwardRef } from "react";

const HeroBackgroundGrid = forwardRef<HTMLDivElement, {
    verticalLineCount: number;
    horizontalLineCount: number;
    isHighlighted?: boolean;
    className?: string;
    style?: React.CSSProperties;
}>(({ verticalLineCount, horizontalLineCount, isHighlighted, style, className }, ref) => {
    return(
        <div 
            className={twMerge(
                "absolute inset-0",
                className,
            )}
            style={style}
            ref={ref}
        >
            {Array.from({ length: horizontalLineCount }).map((_, i) => (
                <HeroBackgroundLine
                    highlight={isHighlighted}
                    direction="horizontal"
                    index={i}
                    key={i}
                />
            ))}
            {Array.from({ length: verticalLineCount }).map((_, i) => (
                <HeroBackgroundLine
                    highlight={isHighlighted}
                    direction="vertical"
                    index={i}
                    key={i}
                />
            ))}
        </div>
    )
})
HeroBackgroundGrid.displayName = 'HeroBackgroundGrid';
export default HeroBackgroundGrid;