import React from "react";
import RevealAnimation from "./RevealAnimation";

// Skills data grouped by category
const skillsData = [
  {
    category: "Machine Learning",
    skills: [
      "Classical Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Time Series Analysis",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "Hugging Face",
      "OpenCV",
      "Pandas",
      "Apache Spark",
    ],
  },
  {
    category: "Languages",
    skills: [
      "Python",
      "SQL",
      "C++",
      "C",
      "Java",
      "JavaScript",
      "TypeScript",
      "Go",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "W&B",
      "Kafka",
      "GCP",
      "Git",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary/50">
      <div className="section-container">
        <RevealAnimation>
          <h2 className="section-title">Skills</h2>
        </RevealAnimation>

        <div className="space-y-8">
          {skillsData.map((skillGroup, groupIndex) => (
            <RevealAnimation key={groupIndex} delay={groupIndex * 100}>
              <div>
                <h3 className="text-lg font-medium mb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
