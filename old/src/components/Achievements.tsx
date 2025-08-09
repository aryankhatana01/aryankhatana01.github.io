import React from "react";
import RevealAnimation from "./RevealAnimation";
import {
  Award,
  BookOpen,
  Award as Trophy,
  Users,
  Medal,
  Rocket,
} from "lucide-react";

// Achievements data
const achievements = [
  {
    icon: Award,
    title: "MIT LISH-MoA Competition Silver Medalist",
    description:
      "Ranked in the Top 3% (163/4373) in MIT’s LISH Mechanism of Action competition, demonstrating expertise in drug action prediction using machine learning.",
  },
  {
    icon: Trophy,
    title: "Google Research Football Competition",
    description:
      "Awarded $1000 in Google Cloud credits for outstanding performance in reinforcement learning, optimizing AI agents in complex game environments.",
  },
  {
    icon: Medal,
    title: "Kaggle Competitions Excellence",
    description:
      "Secured multiple top-tier finishes, including Top 4% in PetFinder.my-Pawpularity Prediction, Top 5% in Happywhale Whale Identification, and Top 10% in Cassava Leaf Disease Prediction.",
  },
  {
    icon: Users,
    title: "Open Source Contributor",
    description:
      "Developed and maintained key ML libraries, contributing to deep learning frameworks and optimizing model training for scalable AI applications.",
  },
  {
    icon: Rocket,
    title: "Recommender System Challenge",
    description:
      "Achieved a top 9% ranking in the OTTO Multi-Objective Recommender System competition, showcasing expertise in personalized AI recommendations.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements">
      <div className="section-container">
        <RevealAnimation>
          <h2 className="section-title">Achievements</h2>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <RevealAnimation key={index} delay={index * 100}>
              <div className="bg-card p-5 rounded-md border border-border/40 shadow-sm flex">
                <div className="mr-4 mt-1">
                  <achievement.icon className="w-5 h-5 text-primary/70" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
