import React from "react";
import RevealAnimation from "./RevealAnimation";

// Project data
const projects = [
  {
    title: "Collaborative Filtering Based Recommender System",
    description:
      "Built and trained a collaborative filtering model for AI movie recommendations using PyTorch. Developed a FastAPI backend and ReactJS frontend for user interaction.",
    tags: ["PyTorch", "FastAPI", "ReactJS", "MongoDB"],
  },
  {
    title: "Real-Time Email Spam Detection System",
    description:
      "Designed a Kafka-based production-level email spam detection system with a BERT classifier, integrated with Gmail API for real-time spam filtering.",
    tags: ["Kafka", "BERT", "FastAPI", "Docker"],
  },
  {
    title: "Melodet - Skin Cancer Detection System",
    description:
      "Trained a deep learning model using Efficientnet in PyTorch to detect skin cancer. Built a full-stack web app with FastAPI and ReactJS for image upload and diagnosis.",
    tags: ["PyTorch", "FastAPI", "ReactJS", "CNN"],
  },
  {
    title: "Subgen - Video Subtitle Generation Platform",
    description:
      "Utilized OpenAI Whisper for automatic subtitle generation. Built a ReactJS frontend and FastAPI backend with FFMPEG integration for video processing.",
    tags: ["Whisper", "FastAPI", "ReactJS", "FFMPEG"],
  },
  {
    title: "UnblurAI - AI Image Editing Suite",
    description:
      "Developed a 4x image upscaler using ESRGAN in PyTorch for enhancing blurry images. Designed a seamless FastAPI backend and a ReactJS frontend.",
    tags: ["ESRGAN", "PyTorch", "FastAPI", "ReactJS"],
  },
  {
    title: "Finetuning GPT-2 for code answering",
    description:
      "Finetuned a GPT-2 model on the Stackoverflow dataset for code answering using a cloud GPU machine on GCP.",
    tags: ["GPT-2", "PyTorch", "GCP"],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <RevealAnimation>
          <h2 className="section-title">Projects</h2>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <RevealAnimation key={index} delay={index * 100}>
              <div className="project-card h-full flex flex-col">
                <div className="p-5 flex-grow">
                  <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
