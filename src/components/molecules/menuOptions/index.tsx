"use client";
import { useState, useEffect } from "react";
import { UseLangaugeContext } from "@/context/language";

const options: any = {
  about: "Sobre mi",
  education: "Estudios",
  experience: "Experiencias",
  projects: "Proyectos",
  skills: "Habilidades",
};
export const MenuOptions = () => {
  const { data } = UseLangaugeContext();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    if (activeSection) {
      document.title = `Alex Paredes: ${
        options[activeSection].charAt(0).toUpperCase() +
        options[activeSection].slice(1)
      }`;
    }
  }, [activeSection]);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="w-max">
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "about" ? "active" : ""
            }`}
            href="#about"
          >
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
                activeSection === "about"
                  ? "w-16 bg-slate-200"
                  : "group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span
              className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 ${
                activeSection === "about"
                  ? "text-slate-200"
                  : "group-hover:text-slate-200"
              }`}
            >
              {data.menuAbout}
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "education" ? "active" : ""
            }`}
            href="#education"
          >
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
                activeSection === "education"
                  ? "w-16 bg-slate-200"
                  : "group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span
              className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 ${
                activeSection === "education"
                  ? "text-slate-200"
                  : "group-hover:text-slate-200"
              }`}
            >
              {data.menuEducation}
            </span>
          </a>
        </li>

        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "experience" ? "active" : ""
            }`}
            href="#experience"
          >
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
                activeSection === "experience"
                  ? "w-16 bg-slate-200"
                  : "group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span
              className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 ${
                activeSection === "experience"
                  ? "text-slate-200"
                  : "group-hover:text-slate-200"
              }`}
            >
              {data.menuExperience}
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "projects" ? "active" : ""
            }`}
            href="#projects"
          >
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
                activeSection === "projects"
                  ? "w-16 bg-slate-200"
                  : "group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span
              className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 ${
                activeSection === "projects"
                  ? "text-slate-200"
                  : "group-hover:text-slate-200"
              }`}
            >
              {data.menuProjects}
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "skills" ? "active" : ""
            }`}
            href="#skills"
          >
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
                activeSection === "skills"
                  ? "w-16 bg-slate-200"
                  : "group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span
              className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 ${
                activeSection === "skills"
                  ? "text-slate-200"
                  : "group-hover:text-slate-200"
              }`}
            >
              {data.menuSkills}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
