import { Suspense, useEffect } from "react";
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
gsap.config({
  force3D: false,
});

function App() {
  useEffect(() => {
    const triggers = ScrollTrigger.getAll();
    console.log(`Всего ScrollTrigger'ов: ${triggers.length}`);

    triggers.forEach((trigger, i) => {
      console.log(`--- Trigger ${i + 1} ---`);
      console.log("ID:", trigger.id || "(без id)");
      console.log("Trigger элемент:", trigger.trigger);
      console.log("Start:", trigger.start);
      console.log("End:", trigger.end);
      console.log("Animation:", trigger.animation);
      console.log("----------------------");
    });
  }, []);
  return (
    <main>
      <Suspense fallback={<Preloader />}>
        <section>
          <HeroSection />
        </section>

        <section>
          <FourSection />
        </section>

        <section className="h-dvh">

        </section>

      </Suspense>
    </main>
  );
}

export default App;
