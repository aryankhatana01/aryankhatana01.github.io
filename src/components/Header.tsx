import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <div className="text-lg font-medium">Aryan Khatana</div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="nav-link">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#achievements" className="nav-link">
                  Achievements
                </a>
              </li>
              {/* <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li> */}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
