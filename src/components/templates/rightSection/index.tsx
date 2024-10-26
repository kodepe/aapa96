import { About } from "@/components/organisms/about";
import { Footer } from "@/components/organisms/footer";
import { Experiences } from "@/components/organisms/experiences";
import { Projects } from "@/components/organisms/projects";
import { Skills } from "@/components/organisms/skills";
import { Education } from "@/components/organisms/education";

export const RightSection = () => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Education />
      <Experiences />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
};
