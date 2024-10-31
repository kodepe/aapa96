export type MenuOptionsType =
  | "about"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | string
  | undefined;
export interface MenuOptionsProps {
  about: string;
  education: string;
  experience: string;
  projects: string;
  skills: string;
}
