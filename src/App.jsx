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

// GSAP настройки для производительности
gsap.registerPlugin(ScrollTrigger);

// Глобальные настройки GSAP для лучшей производительности
gsap.config({
  force3D: true,
  autoSleep: 60,
  nullTargetWarn: false
});

// Настройки ScrollTrigger по умолчанию
ScrollTrigger.defaults({
  anticipatePin: 1,
  markers: false // отключить маркеры в продакшене
});

// Оптимизация для мобильных устройств (опционально)
if (typeof window !== 'undefined') {
  ScrollTrigger.normalizeScroll(true);
}

function App() {
  return (
    <main>
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