import { LINKS } from "@/constants/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('footer');

    return(
        <footer className="bg-tertiary">
            <div className="main-width py-8 flex justify-between items-center">
                <ul className="flex gap-6">
                    {LINKS.map(link => (
                        <li key={link.name}>
                            <a
                                style={{
                                    '--from-element': '.6rem',
                                    '--arrow-offset': '.2rem'
                                } as React.CSSProperties}
                                className="block"
                                data-tooltip={link.tooltip}
                                aria-label={link.tooltip}
                                target="_blank"
                                href={link.url}
                            >
                                <FontAwesomeIcon 
                                    icon={link.icon}
                                    className="text-4xl"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                <span>
                    {t('created-by')}
                </span>
            </div>
        </footer>
    )
}