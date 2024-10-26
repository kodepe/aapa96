import { Fullname } from "@/components/molecules/fullname";
import { FullResumen } from "@/components/molecules/fullResume";
import { MenuOptions } from "@/components/molecules/menuOptions";
import { SocialMediaIcon } from "@/components/molecules/socialMediaIcons";

export const LeftSection = () => {
  return (
    <div className="flex  flex-col items-center lg:items-start text-center lg:text-left justify-start flex-1 lg:min-h-screen lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <Fullname />
      <MenuOptions />
      <FullResumen />
      <SocialMediaIcon />
    </div>
  );
};
