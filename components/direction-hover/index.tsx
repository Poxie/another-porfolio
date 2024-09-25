import { forwardRef, ForwardedRef } from "react";
import { twMerge } from "tailwind-merge";

const DirectionHover = forwardRef<HTMLDivElement, {
    className?: string;
}>(function DirectionHover({ className }, ref: ForwardedRef<HTMLDivElement>) {
    console.log(className);
    return (
        <div className="absolute left-0 top-0 overflow-hidden w-full h-full pointer-events-none">
            <div 
                className={twMerge(
                    "absolute -top-full -left-full w-full h-full bg-secondary/20",
                    className,
                )}
                ref={ref}
            />
        </div>
    );
});

export default DirectionHover;