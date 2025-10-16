import { Suspense, lazy } from "react";
import Preloader from "./Components/Preloader";

// Динамический импорт секций
const HeroSection = lazy(() => import("./Sections/HeroSection"));
const FourSection = lazy(() => import("./Sections/FourSection/FourSection"));
const Traditional = lazy(() => import("./Sections/traditional/Traditional"));
const Offers = lazy(() => import("./Sections/offers/Offers"));
const Cases = lazy(() => import("./Sections/cases/Cases"));
const Benefits = lazy(() => import("./Sections/benefits/Benefits"));
const About = lazy(() => import("./Sections/about/About"));
const NineSection = lazy(() => import("./Sections/NineSection/NineSection"));

// Импорт GSAP только нужных модулей
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  force3D: false,
});

function App() {
  return (
    <main id="body">
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
