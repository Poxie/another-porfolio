import projects from './projects.json';
import techStack from './tech-stack.json';

export type Project = typeof projects[number];
export type TechLanguage = typeof techStack[number];