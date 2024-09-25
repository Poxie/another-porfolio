import { twMerge } from "tailwind-merge";

export default function Input({ onChange, value, label, textArea }: {
    onChange?: (text: string) => void;
    value?: string;
    label?: string;
    textArea?: boolean;
}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(onChange) {
            onChange(e.target.value);
        }
    }

    const labelId = label?.split(' ').join('-').toLowerCase();

    const commonProps = {
        id: labelId,
        onChange: handleChange,
        value,
        className: "peer px-4 py-3 w-full bg-tertiary rounded-md outline-none border-[1px] border-transparent focus:border-quaternary",
        required: true,
    }
    return(
        <div className="relative">
            {!textArea && (
                <input 
                    {...commonProps}
                    type="text"
                />
            )}
            {textArea && (
                <textarea {...commonProps}></textarea>
            )}
            {label && (
                <label 
                    htmlFor={labelId}
                    className={twMerge(
                        "px-2 py-0.5 absolute top-2.5 left-2 bg-tertiary text-secondary rounded-md transition-[transform,font-size] pointer-events-none",
                        "[--translate-y:-1rem] [--font-size] peer-focus:translate-y-[--translate-y] peer-focus:text-[.70rem] peer-valid:translate-y-[--translate-y] peer-valid:text-[.70rem]"
                    )}
                >
                    {label}
                </label>
            )}
        </div>
    )
}