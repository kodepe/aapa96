"use client";
import { ArrowCustom } from "@/components/atoms/icons/arrowCustom";
import { UseLangaugeContext } from "@/context/language";

export const FullResumen = () => {
  const { data } = UseLangaugeContext();
  return (
    <div className="mt-12">
      <a
        className="inline-flex items-baseline py-2 leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="View Full Résumé (opens in a new tab)"
      >
        <span>
          {data.fullResume}
          <ArrowCustom />
        </span>
      </a>
    </div>
  );
};
