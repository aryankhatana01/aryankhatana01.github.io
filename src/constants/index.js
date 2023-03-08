import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  docker,
} from "../assets";
import scaletorch from "../assets/scaletorch.png";
import ivy from "../assets/ivy.jpeg";
import kaggle from "../assets/kaggle.webp";

import cpp from "../assets/my-assets/cpp.svg";
import c from "../assets/my-assets/c.svg";
import gcloud from "../assets/my-assets/google-cloud-1.svg";
import java from "../assets/my-assets/java.svg";
import python from "../assets/my-assets/python.svg";
import pytorch from "../assets/my-assets/pytorch.svg";
import aws from "../assets/my-assets/aws-2.svg";
import tf from "../assets/my-assets/tf.svg";

import unblueai from "../assets/unbluai.png";
import melodet from "../assets/melodet.png";
import cf from "../assets/cf_rec.png";
import gpt from "../assets/gpt.png";
import tankstars from "../assets/my-assets/tankstars.png";
import subgen from "../assets/subgen.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "Tensorflow",
    icon: tf,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Gcloud",
    icon: gcloud,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "Scaletorch.ai",
    icon: scaletorch,
    iconBg: "#383E56",
    date: "October 2021 - May 2022",
    points: [
      "Working on AWS and GCP Cloud Integration for our platform.",
      "Implementing different Deep Learning techniques and research papers for faster and more efficient model training benefitting the end-user.",
      "Writing testing scripts and benchmarking different Deep Learning models.",
      "Researching and Implementing Self-Supervised Learning models.",
      "Porting PyTorch code into TensorFlow and PyTorch Lightning.",
      "Allocating GPU based on the user's computational requirements.",
      "Creating and working with Docker containers on different cloud computing platforms.",
      "Web scraping GPU pricing from different cloud providers."
    ],
  },
  {
    title: "Machine Learning Freelancer",
    company_name: "Ivy",
    icon: ivy,
    iconBg: "#E6DEDD",
    date: "August 2022 - October 2022",
    points: [
      "Implemented various Non-Linear Activation Functions in Pytorch and Tensforflow for Ivy.",
      "Wrote Documentation in various functions and methods for the Library.",
      "Implemented various Loss Fucntions in Pytorch and ported them for Ivy."
    ],
  },
  {
    title: "Kaggle Competitions Expert",
    company_name: "Kaggle",
    icon: kaggle,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Silver Medal in Pawpularity Contest.",
      "Bronze Medal in HappyWhale Contest.",
      "Bronze Medal in Otto - Recommender System Contest.",
      "Top 10% in Cassava Leaf Disease Prediction(Lost a Bronze medal by 1 rank).",
      "Silver Medal in Lish-MoA by MIT and Harvard.",
      "Won a $1000 GCP gift card in Google's Fotball research for Manchester United Competition.",
      "Top 14% in Rainforest Connection Audio Detection Competition",
      "Top 11% in RiiiD Answer Correctness Prediction.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "unblurai",
    description:
      "I full suite of Image edit tools that use AI to enhance, relight and remove background from images.[Work in Progress]",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "esrgan",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
    ],
    image: unblueai,
    source_code_link: "https://github.com/aryankhatana01/unblurai-new",
  },
  {
    name: "Subgen",
    description:
      "A full stack web app that gen generate subtitles for you videos using OpenAI-Whisper.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
    ],
    image: subgen,
    source_code_link: "https://github.com/aryankhatana01/whisper-subtitles",
  },
  {
    name: "Melanoma Detection",
    description:
      "A full stack web application that uses a deep learning model to detect melanoma in images.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "cnn",
        color: "green-text-gradient",
      },
    ],
    image: melodet,
    source_code_link: "https://github.com/aryankhatana01/sota-melanoma-detection",
  },
  {
    name: "Recommendation System",
    description:
      "A full stack collaborative filtering based movie recommender system create using FastAPI, React, Pytorch and Turicreate.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "collaborative filtering",
        color: "green-text-gradient",
      },
    ],
    image: cf,
    source_code_link: "https://github.com/aryankhatana01/cf-recsys",
  },
  {
    name: "Hindi GPT",
    description:
      "A GPT model trained on Hindi poems by Munshi Premchand and generate them.",
    tags: [
      {
        name: "GPT",
        color: "green-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/aryankhatana01/hindi-gpt-mini",
  },
  {
    name: "Tankstars",
    description:
      "A two player shooter game in Java and Box2D.",
    tags: [
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Box2D",
        color: "blue-text-gradient",
      },
    ],
    image: tankstars,
    source_code_link: "https://github.com/aryankhatana01/TankStarsJava-GamePlay",
  },
];

export { services, technologies, experiences, testimonials, projects };
