import { About } from "./home/partials/about";
import { Details } from "./home/partials/details";
import { Portofolio } from "./home/partials/example-porto";
import { Footer } from "./home/partials/footer";
import { Hero } from "./home/partials/hero";
import Navbar from "./home/partials/navbar";
import { SkillDetailsSection } from "./home/partials/skill-detail";
import { SkillSections } from "./home/partials/skills";
import { ProjectSection } from "./home/partials/project";
import { TestimonialSection } from "./home/partials/testi";
import { ServicesProcessSection } from "./home/partials/service-process";
import { ContactSection } from "./home/partials/contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Details />
        <SkillSections />
        <SkillDetailsSection />
        <Portofolio />
        <ProjectSection />
        <TestimonialSection />
        <ServicesProcessSection />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
