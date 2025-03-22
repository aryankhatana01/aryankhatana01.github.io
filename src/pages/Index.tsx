import React, { useEffect } from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import Education from "@/components/Education";
// import Contact from "../components/Contact";

const Index = () => {
  // Handle smooth scrolling for Safari
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isNavLink =
        target.tagName === "A" && target.getAttribute("href")?.startsWith("#");

      if (isNavLink) {
        e.preventDefault();
        const href = target.getAttribute("href") as string;
        const sectionId = href.substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          const offsetTop = section.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Introduction />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
