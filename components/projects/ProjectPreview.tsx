import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const PREVIEW_WIDTH = 70;
export default function ProjectPreview({ children, url }:    {
    children: React.ReactNode;
    url: string;
}) {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [initialDimensions, setInitialDimensions] = useState({ 
        width: 0, 
        height: 0,
        left: 0,
        top: 0,
    });

    const containerRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLButtonElement>(null);

    const setContainerInitialDimensions = (dimensions: typeof initialDimensions & {
        transform?: string;
    }) => {
        if(!containerRef.current) return;
        containerRef.current.style.width = `${dimensions.width}px`;
        containerRef.current.style.height = `${dimensions.height}px`;
        containerRef.current.style.left = `${dimensions.left}px`;
        containerRef.current.style.top = `${dimensions.top}px`;
        containerRef.current.style.transform = dimensions.transform || '';
    }
    const updateContainerStyles = (styles: {
        width: string;
        height: string;
        left: string;
        top: string;
        transform: string;
    }) => {
        if(!containerRef.current) return;
        containerRef.current.style.width = styles.width;
        containerRef.current.style.height = styles.height;
        containerRef.current.style.left = styles.left;
        containerRef.current.style.top = styles.top;
        containerRef.current.style.transform = styles.transform;
    }
    const clearContainerStyles = () => {
        if(!containerRef.current) return;
        containerRef.current.style.width = '';
        containerRef.current.style.height = '';
        containerRef.current.style.left = '';
        containerRef.current.style.top = '';
        containerRef.current.style.transform = '';
    }
    const hidePreviewImage = (hidden: boolean) => {
        iframeRef.current!.style.opacity = hidden ? '1' : '0';
        backdropRef.current!.style.opacity = hidden ? '1' : '0';
        contentRef.current!.style.opacity = hidden ? '0' : '1';
    }

    const startPreview = () => {
        if (!containerRef.current) return;

        const { width, height, left, top } = containerRef.current.getBoundingClientRect();

        setInitialDimensions({ width, height, left, top });
        setContainerInitialDimensions({ width, height, left, top });

        document.body.style.overflow = 'hidden';
        iframeRef.current!.src = url;
        
        setTimeout(() => {
            setPreviewVisible(true);
            
            updateContainerStyles({
                width: `${PREVIEW_WIDTH}vw`,
                height: `${PREVIEW_WIDTH * (height / width)}vw`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
            })
            hidePreviewImage(true);
        });
    }
    const stopPreview = () => {
        setContainerInitialDimensions({
            ...initialDimensions,
            transform: 'translateY(0) translateX(0)',
        })

        hidePreviewImage(false);

        setTimeout(() => {
            setPreviewVisible(false);
            clearContainerStyles();

            document.body.style.overflow = '';
            iframeRef.current!.src = '';
        }, 1000)
    }

    return(
        <>
        <div 
            ref={backdropRef}
            onClick={stopPreview}
            className={twMerge(
                "z-20 fixed inset-0 bg-black/40 opacity-0 pointer-events-none transition-opacity duration-1000",
                previewVisible && 'pointer-events-auto',
            )} 
        />
        <div 
            className={twMerge(
                "h-full aspect-video transition-[width,height,top,left,transform] duration-1000",
                previewVisible && 'z-20 fixed',
            )}
            ref={containerRef}
        >
            {previewVisible && (
                <button 
                    className="z-[2] px-3 py-2.5 absolute top-4 right-8 font-medium bg-secondary hover:bg-tertiary transition-colors rounded-md"
                    onClick={stopPreview}
                >
                    Close preview
                </button>
            )}
            <iframe 
                title="Project Preview"
                className={twMerge(
                    "z-[1] absolute w-full aspect-video pointer-events-none border-[1px] border-transparent transition-opacity duration-1000",
                    previewVisible && 'pointer-events-auto border-tertiary',
                )}
                ref={iframeRef}
            />
            <button 
                aria-label="Show preview"
                className={twMerge(
                    "z-[3] absolute w-full aspect-video transition-opacity duration-1000",
                    previewVisible && 'pointer-events-none',
                )}
                onClick={startPreview}
                ref={contentRef}
            >
                {children}
            </button>
        </div>
        </>
    )
}