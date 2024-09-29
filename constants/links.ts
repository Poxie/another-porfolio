import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const LINKS = [
    { name: 'GitHub', icon: faGithub, url: 'https://github.com/Poxie', tooltip: 'GitHub profile' },
    { name: 'LinkedIn', icon: faLinkedin, url: 'https://www.linkedin.com/in/albin-k%C3%A4rvling-237a851a8/', tooltip: 'LinkedIn profile' },
    { name: 'Mail', icon: faEnvelope, url: 'mailto:albin.karvling@hotmail.com', tooltip: 'Send me an email' },
] as const;