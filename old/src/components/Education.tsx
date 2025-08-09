import React from "react";
import RevealAnimation from "./RevealAnimation";
import { Card, CardContent } from "./ui/card";
import { Building2 } from "lucide-react";

// Education data
const education = [
  {
    institution: "Indraprastha Institute of Information Technology, Delhi",
    degree: "B.Tech. in Computer Science and Applied Mathematics",
    period: "2021 - 2025",
    description:
      "Ongoing Bachelor's degree in CS with a focus on Applied Mathematics.",
    logoUrl: "/logos/iiitd.png",
  },
  {
    institution: "Bluebells School International",
    degree: "High School Diploma",
    period: "2007 - 2021",
    description:
      "Physics, Chemistry, Mathematics, Computer Science, English Core.",
    logoUrl: "/logos/bbs.png",
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="section-container">
        <RevealAnimation>
          <h2 className="section-title">Education</h2>
        </RevealAnimation>

        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <RevealAnimation key={index} delay={index * 100}>
              <Card className="overflow-hidden border border-border/40">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 bg-secondary/30 flex items-center justify-center p-6">
                      {edu.logoUrl ? (
                        <img
                          src={edu.logoUrl}
                          alt={`${edu.institution} logo`}
                          className="w-24 h-24 object-contain"
                          onError={(e) => {
                            // Fallback to icon if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.parentElement?.classList.add(
                              "logo-fallback"
                            );
                          }}
                        />
                      ) : (
                        <div className="logo-fallback">
                          <Building2 className="w-16 h-16 text-primary/60" />
                        </div>
                      )}
                    </div>
                    <div className="w-full md:w-3/4 p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="text-lg font-medium">{edu.degree}</h3>
                        <span className="text-sm text-muted-foreground font-mono">
                          {edu.period}
                        </span>
                      </div>
                      <h4 className="text-md text-primary/80 mb-2">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
