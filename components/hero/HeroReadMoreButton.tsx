import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";

const READ_MORE_TEXT = "Read more";
export default function HeroReadMoreButton() {
    return(
        <button className="grid place-items-center gap-2 absolute bottom-0 left-2/4 -translate-x-2/4">
            <div className="flex">
                {READ_MORE_TEXT.split('').map((letter, index) => (
                    <span 
                        className={twMerge(
                            "block animate-letter-bounce",
                            letter === ' ' && 'mx-0.5'
                        )}
                        style={{ animationDelay: `${index * 70}ms` }}
                        key={index}
                    >
                        {letter}
                    </span>
                ))}
            </div>
            <FontAwesomeIcon 
                icon={faArrowDown} 
                className="size-12 animate-bounce"
            />
        </button>
    )
}