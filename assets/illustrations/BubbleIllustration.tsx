export default function BubbleIllustration({ className }: {
    className?: string;
}) {
    return(
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path className="fill-inherit" d="M15.0208 59.7582C3.52075 54.5164 0.560871 52.2756 0.0207647 30.5C-0.519341 8.72442 9.52077 2.9261 25.0208 0.999998C40.4049 -0.911702 45.4454 2.4491 52.853 7.38815L53.0208 7.50002C60.5207 12.5 65.1812 24.2513 63.0207 36.5C60.8603 48.7488 58.3737 54.0421 43.5208 59.7582C28.6678 65.4743 26.5208 65 15.0208 59.7582Z" />
        </svg>
    )
}