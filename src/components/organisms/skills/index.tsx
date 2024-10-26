"use client";
import { UseLangaugeContext } from "@/context/language";

export const Skills = () => {
  const { data } = UseLangaugeContext();
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:pb-4 lg:opacity-1">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
          {data.menuSkills}
        </h2>
      </div>
      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
        {data.skills.map((value, index) => {
          return (
            <li className="mr-1.5 mt-2 list-none" key={`${value}-${index}`}>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                {value}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
