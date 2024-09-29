import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type DropdownItem = {
    id: string;
    text: string;
}
export default function Dropdown({ items, activeId, onChange }: {
    items: readonly DropdownItem[];
    activeId: string;
    onChange?: (id: string) => void;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (id: string) => {
        onChange?.(id);
        setIsOpen(false);
    }

    const activeItem = items.find(item => item.id === activeId) || items[0];
    return(
        <div className="w-dropdown relative">
            <button 
                className="w-full px-3 py-2 text-left text-sm border-[1px] border-tertiary bg-secondary hover:bg-tertiary rounded-md transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {activeItem.text}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                        className="p-1 absolute z-10 w-full mt-1 bg-secondary border-[1px] border-tertiary"
                    >
                        {items.map(item => (
                            <li key={item.id}>
                                <button
                                    className="px-2.5 py-1.5 w-full text-left text-sm hover:bg-tertiary transition-colors rounded-md"
                                    onClick={() => handleSelect(item.id)}
                                >
                                    {item.text}
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}