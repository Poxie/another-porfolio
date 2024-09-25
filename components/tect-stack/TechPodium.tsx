import { TechLanguage } from "@/assets/json/types"
import { useTranslations } from "next-intl";

const DEFAULT_HEIGHT = 350;
export default function TechPodium({ tech, heightDecimal }: {
    tech: TechLanguage;
    heightDecimal: number;
}) {
    const t = useTranslations('tech-stack');

    const languageDescription = t(`${tech.id}.description`);
    const podiumHeight = DEFAULT_HEIGHT * heightDecimal;
    return(
        <div className="text-center">
            <span className="mb-4 block text-4xl font-semibold">
                {tech.language}
            </span>
            <div
                className="bg-secondary border-[1px] border-tertiary rounded-t-2xl"
                style={{ height: `${podiumHeight}px` }}
            >
                <span className="p-4 block border-b-[1px] border-tertiary">
                    {languageDescription}
                </span>
                <ul className="p-4 text-secondary">
                    {tech.addons.map(addon => (
                        <li key={addon}>
                            {addon}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}