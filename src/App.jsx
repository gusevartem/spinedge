import { Suspense } from "react";
import Preloader from "./Components/Preloader";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import HeroSection from "./Sections/HeroSection";
import FourSection from "./Sections/FourSection/FourSection";
import { Traditional } from "./Sections/traditional/Traditional";
import { Offers } from "./Sections/offers/Offers";
import { Cases } from "./Sections/cases/Cases";
import { Benefits } from "./Sections/benefits/Benefits";
import { About } from "./Sections/about/About";
import NineSection from "./Sections/NineSection/NineSection";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ anticipatePin: 1 });

function App() {


  return (
    <main>
      {/* Suspense для ленивых компонентов */}
      <Suspense fallback={<Preloader />}>
        <section>
          <HeroSection />
        </section>

        <section>
          <FourSection />
        </section>

        <section>
          <Traditional />
        </section>

        <section>
          <Offers />
        </section>

        <section>
          <Cases />
        </section>

        <section>
          <Benefits />
        </section>

        <section>
          <About />
        </section>

        <section>
          <NineSection />
        </section>
      </Suspense>
    </main>
  );
}

export default App;
