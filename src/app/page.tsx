import { LeftSection } from "@/components/templates/leftSection";
import { RightSection } from "@/components/templates/rightSection";

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
}
