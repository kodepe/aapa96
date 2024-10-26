import { ArrowCustom } from "@/components/atoms/icons/arrowCustom";

export const ExperienceCard = ({
  value,
}: {
  value: {
    title: string;
    date?: string;
    link: string;
    description: string;
    techs?: string[];
  };
}) => {
  return (
    <div
      key={value.title}
      className="group mb-10 relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      {value.date && (
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label="2024 to Present"
        >
          {value.date}
        </header>
      )}
      <div
        className={`z-10 sm:col-span-6 ${
          value.date ? "md:col-span-6" : "md:col-span-12"
        }`}
      >
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
              href={value.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                <span className="inline-block">
                  {value.title}
                  <ArrowCustom />
                </span>
              </span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{value.description}</p>
        {value.techs && (
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {value.techs.map((tech) => {
              return (
                <li className="mr-1.5 mt-2" key={`${value.title}-${tech}`}>
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    {tech}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
