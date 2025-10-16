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
    const images = document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    if (!("IntersectionObserver" in window)) {
      images.forEach(img => {
        img.src = img.dataset.src;
      });
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "100px 0px",
        threshold: 0.01,
      }
    );

    images.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, []);

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