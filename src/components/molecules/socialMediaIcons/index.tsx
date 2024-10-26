"use client";
import { IconButton } from "@/components/atoms/iconButton";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa6";

const colorDefault =
  "text-slate-400 hover:text-slate-200 transition-colors duration-300 ";
export const SocialMediaIcon = () => {
  return (
    <div className="flex flex-row gap-2 py-4">
      <IconButton
        tooltipText="Linkedin"
        image={<FaLinkedin className={colorDefault} size={26} />}
        onClick={() => {}}
      />
      <IconButton
        tooltipText="Facebook"
        image={<FaFacebook className={colorDefault} size={26} />}
        onClick={() => {}}
      />
      <IconButton
        tooltipText="Github"
        image={<FaGithub className={colorDefault} size={26} />}
        onClick={() => {}}
      />
      <IconButton
        tooltipText="Instagram"
        image={<FaInstagram className={colorDefault} size={26} />}
        onClick={() => {}}
      />
    </div>
  );
};
