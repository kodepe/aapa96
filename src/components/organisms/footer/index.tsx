"use client";

import { UseLangaugeContext } from "@/context/language";

export const Footer = () => {
  const { data } = UseLangaugeContext();
  return (
    <div id="footer">
      <strong className="text-slate-200">
        © 2024 Alex Andre Paredes Aranzamendi.
      </strong>{" "}
      {data.footer}
    </div>
  );
};
