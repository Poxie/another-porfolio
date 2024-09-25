import { forwardRef, ForwardedRef } from "react";

const DirectionHover = forwardRef<HTMLDivElement, {}>(function DirectionHover(_, ref: ForwardedRef<HTMLDivElement>) {
    return (
        <div className="z-[-1] absolute left-0 top-0 overflow-hidden w-full h-full pointer-events-none">
            <div 
                className="absolute -top-full -left-full w-full h-full bg-secondary/20"
                ref={ref}
            />
        </div>
    );
});

export default DirectionHover;