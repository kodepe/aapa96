"use client";

import { ExperienceCard } from "@/components/molecules/experienceCard";
import { UseLangaugeContext } from "@/context/language";

export const Experiences = () => {
  const { data } = UseLangaugeContext();
  return (
    <section
      id="experience"
      key="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-38 lg:scroll-mt-24 animate__animated animate__fadeInRight"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:pb-4 lg:opacity-1">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          {data.menuExperience}
        </h2>
      </div>
      {data.experiences.map((value) => {
        return <ExperienceCard key={value.title} value={value} />;
      })}
    </section>
  );
};
