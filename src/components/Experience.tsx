import React, { useEffect } from "react";
import RevealAnimation from "./RevealAnimation";

// Experience data with company logos
const experiences = [
  {
    company: "TurboML",
    title: "Software Engineer Intern",
    period: "Summer 2023",
    description:
      "Worked on building a real-time ML platform for online inference and continual learning. Developed a Python SDK for data manipulation, integrated Jupyter Lab, and optimized feature extraction using PySpark.",
    logo: "/logos/turboml.png", // Store in public/logos/
  },
  {
    company: "IIIT Delhi - Dept. of Human-Centered Design",
    title: "Undergraduate Researcher",
    period: "Jan 2024 - Dec 2024",
    description:
      "Researching the optimization of 3D objects for minimum compliance using neural networks, bridging AI and computational design.",
    logo: "/logos/iiitd.png",
  },
  {
    company: "ScaleTorch.ai",
    title: "Machine Learning Intern",
    period: "Oct 2021 - Jun 2022",
    description:
      "Worked on cloud integration for AWS, GCP, and Azure, enabling users to run ML training jobs securely. Optimized deep learning models for cost efficiency and faster training.",
    logo: "/logos/scaletorch.jpg",
  },
  {
    company: "Ivy",
    title: "Freelance ML Intern",
    period: "Aug 2022 - Oct 2022",
    description:
      "Implemented non-linear activation and loss functions in PyTorch and TensorFlow. Developed tests and documentation for an ML library.",
    logo: "/logos/ivy.png",
  },
];

const Experience = () => {
  useEffect(() => {
    const observeTimelineItems = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animated");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      const timelineItems = document.querySelectorAll(".timeline-item");
      timelineItems.forEach((item) => observer.observe(item));

      return () => {
        timelineItems.forEach((item) => observer.unobserve(item));
      };
    };

    observeTimelineItems();
  }, []);

  return (
    <section id="experience" className="bg-card/50">
      <div className="section-container">
        <RevealAnimation>
          <h2 className="section-title">Experience</h2>
        </RevealAnimation>

        <div className="lg:pl-32 relative timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item" data-delay={index * 150}>
              <div className="timeline-dot"></div>
              <span className="hidden lg:block timeline-date">
                {exp.period}
              </span>
              <div className="bg-card p-5 rounded-md border border-border/40 shadow-sm flex items-center gap-4">
                {/* Logo */}
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-12 h-12 object-contain rounded-md"
                />
                <div>
                  <span className="block lg:hidden text-sm text-muted-foreground font-mono mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-medium">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                    {exp.company}
                  </p>
                  <p className="text-sm">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
