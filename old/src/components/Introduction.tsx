import React from "react";
import RevealAnimation from "./RevealAnimation";
import { Github, Linkedin, Mail } from "lucide-react";

const Introduction = () => {
  return (
    <section id="about" className="py-12">
      <div className="section-container py-6">
        <RevealAnimation>
          <span className="inline-block px-3 py-1 bg-secondary text-sm font-medium rounded-full mb-3">
            <span className="bg-gradient-to-r from-indigo-700 to-sky-700 dark:from-blue-300 dark:to-teal-400 bg-clip-text text-transparent">
              Machine Learning Engineer
            </span>
          </span>
        </RevealAnimation>

        <RevealAnimation delay={100}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Hi, I'm Aryan!
          </h1>
        </RevealAnimation>

        <RevealAnimation delay={200}>
          <p className="text-muted-foreground max-w-2xl text-base mb-5">
            Undergrad at <b>IIIT-Delhi</b> pursuing bachelor's in{" "}
            <b>Computer Science and Applied Math</b>, passionate about building
            scalable ML systems, real-time AI solutions, and cutting-edge
            research-driven applications.
          </p>
        </RevealAnimation>

        <RevealAnimation delay={250}>
          <div className="flex space-x-4 mb-5">
            <a
              href="https://github.com/aryankhatana01"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/akhatana/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:aryankhatana01@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={300}>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:aryankhatana01@gmail.com"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md transition-transform hover:scale-[1.02]"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md transition-transform hover:scale-[1.02]"
            >
              View projects
            </a>
            {/* <a
              href="https://drive.google.com/file/d/1xp84daZnv7yVwjyKlEACA6cm-Ev999L4/view?usp=sharing"
              target="_blank"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md transition-transform hover:scale-[1.02]"
            >
              Resume
            </a> */}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Introduction;
