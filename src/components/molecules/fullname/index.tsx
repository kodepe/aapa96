"use client";
import { UseLangaugeContext } from "@/context/language";

export const Fullname = () => {
  const { data } = UseLangaugeContext();
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          {data.profileName}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {data.profileTitle}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          {data.profileDescription}
        </p>
      </div>
    </div>
  );
};
