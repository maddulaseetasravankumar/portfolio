import { Suspense, lazy, useState } from "react";
import "./styles/global.css";

// Sections (kept eager — above the fold / primary recruiter content)
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import LogosStrip from "./sections/LogosStrip";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Projects from "./sections/Projects";

// Sections code-split — below the fold, deferred until needed
const Education = lazy(() => import("./sections/Education"));
const Services = lazy(() => import("./sections/Services"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

// Reusable building blocks
import Loader from "./components/Loader";
import Reveal from "./components/Reveal";
import SectionFallback from "./components/SectionFallback";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";

// Reveal hook (existing CSS-based scroll reveal, still used for finer
// grained child elements alongside the new Framer Motion <Reveal />)
import useReveal from "./hooks/useReveal";

const SESSION_KEY = "portfolio_intro_shown";

const App = () => {
  // Activate scroll-reveal animations globally
  useReveal();

  // Loader is shown only once per browser session/tab. Body-scroll
  // locking while it's visible is handled inside Loader.jsx itself.
  const [showLoader, setShowLoader] = useState(
    () => typeof window !== "undefined" && !sessionStorage.getItem(SESSION_KEY)
  );

  const handleLoaderFinish = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <Loader onFinish={handleLoaderFinish} />}

      <CustomCursor />

      <Navbar />
      <Hero />

      <Reveal>
        <LogosStrip />
      </Reveal>

      <Reveal>
        <Stats />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Suspense fallback={<SectionFallback minHeight={420} />}>
        <Reveal>
          <Education />
        </Reveal>
      </Suspense>

      <Suspense fallback={<SectionFallback minHeight={520} />}>
        <Reveal>
          <Services />
        </Reveal>
      </Suspense>

      <Projects />

      <Suspense fallback={<SectionFallback minHeight={600} />}>
        <Reveal>
          <Contact />
        </Reveal>
      </Suspense>

      <Suspense fallback={<SectionFallback minHeight={260} />}>
        <Reveal>
          <Footer />
        </Reveal>
      </Suspense>

      <ScrollToTop />
    </>
  );
};

export default App;
