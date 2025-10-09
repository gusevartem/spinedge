import { Suspense, useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1️⃣ Ждем загрузки всех изображений на странице
    const images = Array.from(document.images);
    const imagePromises = images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) resolve();
          else {
            img.onload = img.onerror = resolve;
          }
        })
    );

    // 2️⃣ Ждем данные из API (пример, можно добавить свои)
    const apiPromises = [
      fetch("/api/data") // пример API запроса
        .then((res) => res.json())
        .catch(() => null),
      // Можно добавить больше промисов, если нужно
    ];

    // 3️⃣ Объединяем все промисы
    Promise.all([...imagePromises, ...apiPromises]).then(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Preloader />; // показываем прелоадер до полной загрузки

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
