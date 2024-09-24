"use client";
import BubbleIllustration from "@/assets/illustrations/BubbleIllustration";
import { useRef, useState } from "react";

const INTERVAL_SPEED = 10;
const ROTATION_SPEED = .5;
export default function HeroLinkIllustration() {
    const [rotation, setRotation] = useState(0);
    const interval = useRef<NodeJS.Timeout>();

    const onMouseEnter = () => {
        interval.current = setInterval(() => {
            setRotation(prev => prev + ROTATION_SPEED);
        }, INTERVAL_SPEED);
    }
    const onMouseLeave = () => {
        clearInterval(interval.current);
    }

    return(
        <div 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <BubbleIllustration className="fill-secondary hover:fill-tertiary transition-colors" />
        </div>
    )
}