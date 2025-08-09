import { useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useReveal } from "@/hooks/use-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Github, Linkedin, Mail } from "lucide-react";

const experiences = [
  { date: "Jul '25 – Present", role: "Software Engineer", company: "PriceLabs", desc: "Working on building scalable, robust pricing engine for short term rentals." },
  { date: "Jan '24 – May '25", role: "Undergraduate Researcher", company: "IIIT Delhi - Dept. of Human-Centered Design", desc: "Researching the optimization of 3D objects for minimum compliance using neural networks, bridging AI and computational design." },
  { date: "May '23 – Jul '23", role: "Software Engineer Intern", company: "TurboML", desc: "Worked on building a real-time ML platform for online inference and continual learning." },
  { date: "Aug '22 – Oct '22", role: "Freelance ML Intern", company: "Ivy", desc: "Implemented non-linear activation and loss functions in PyTorch and TensorFlow. Developed tests and documentation for an ML library." },
  { date: "Oct '21 – Jun '22", role: "Machine Learning Intern", company: "ScaleTorch.ai", desc: "Worked on cloud integration for AWS, GCP, and Azure, enabling users to run ML training jobs securely. Optimized deep learning models for cost efficiency and faster training." },
];

const projects = [
  {
    name: "Collaborative Filtering Based Recommender System",
    desc:
      "Built and trained a collaborative filtering model for AI movie recommendations using PyTorch. Developed a FastAPI backend and ReactJS frontend for user interaction.",
    link: "https://github.com/aryankhatana01/cf-recsys"
  },
  {
    name: "Real-Time Email Spam Detection System",
    desc:
      "Designed a Kafka-based production-level email spam detection system with a BERT classifier, integrated with Gmail API for real-time spam filtering.",
    link: "https://github.com/aryankhatana01/real-time-email-spam-detection"
  },
  {
    name: "Melodet - Skin Cancer Detection System",
    desc:
      "Trained a deep learning model using Efficientnet in PyTorch to detect skin cancer. Built a full-stack web app with FastAPI and ReactJS for image upload and diagnosis.",
    link: "https://github.com/aryankhatana01/sota-melanoma-detection"
  },
  {
    name: "Subgen - Video Subtitle Generation Platform",
    desc:
      "Utilized OpenAI Whisper for automatic subtitle generation. Built a ReactJS frontend and FastAPI backend with FFMPEG integration for video processing.",
    link: "https://github.com/aryankhatana01/whisper-subtitles"
  },
  {
    name: "UnblurAI - AI Image Editing Suite",
    desc:
      "Developed a 4x image upscaler using ESRGAN in PyTorch for enhancing blurry images. Designed a seamless FastAPI backend and a ReactJS frontend.",
    link: "https://github.com/aryankhatana01/unblurai-new"
  },
  {
    name: "Finetuning GPT-2 for code answering",
    desc:
      "Finetuned a GPT-2 model on the Stackoverflow dataset for code answering using a cloud GPU machine on GCP.",
    link: "https://github.com/aryankhatana01/gpt-overflow"
  },
];

const skills = ["Python", "Java", "C/C++", "Javascript", "React", "Node.js", "SQL", "Docker", "Classical ML", "Deep Learning", "NLP"];


const education = [
  { date: "2021 – 2025", degree: "B.Tech in Computer Science", school: "IIIT Delhi", desc: "", logo: "/logos/iiitd.png" },
  { date: "2007 – 2021", degree: "CBSE", school: "Bluebells School International", desc: "", logo: "/logos/bbs.png" },
];

const ownerName = "Aryan Khatana";

const companyLogoMap: Record<string, string> = {
  "TurboML": "/logos/turboml.png",
  "Ivy": "/logos/ivy.png",
  "ScaleTorch.ai": "/logos/scaletorch.jpg",
  "IIIT Delhi - Dept. of Human-Centered Design": "/logos/iiitd.png",
  "PriceLabs": "/logos/pricelabs.jpg",
  // Add more as needed: "PriceLabs": "/logos/pricelabs.png",
};

const socials: Array<{ name: string; href: string; icon: React.ComponentType<{ className?: string }>; aria: string }> = [
  { name: "GitHub", href: "https://github.com/aryankhatana01", icon: Github, aria: "Open GitHub profile" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/akhatana", icon: Linkedin, aria: "Open LinkedIn profile" },
  { name: "Mail", href: "mailto:aryankhatana01@gmail.com", icon: Mail, aria: "Open Mail" },
];

const Index = () => {
  const aboutRef = useReveal<HTMLDivElement>();
  const expRef = useReveal<HTMLDivElement>();
  const projRef = useReveal<HTMLDivElement>();
  const eduRef = useReveal<HTMLDivElement>();
  const skillsRef = useReveal<HTMLDivElement>();
  const achRef = useReveal<HTMLDivElement>();

  useEffect(() => {
    const title = "Aryan Khatana | Software Engineer";
    const description = "Aryan Khatana's developer portfolio.";
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", name);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };

    setMeta("description", description);

    // Canonical
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    const canonical = existingCanonical || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", window.location.href);
    if (!existingCanonical) document.head.appendChild(canonical);

    // JSON-LD
    const ld = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Software Developer",
      url: window.location.href,
      jobTitle: "Software Developer",
      worksFor: { "@type": "Organization", name: "Independent" },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(ld);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);


  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 pointer-events-none bg-transparent pt-2">
        <div className="mx-auto max-w-3xl px-4 h-14 flex items-center justify-center">
          <nav className="pointer-events-auto inline-flex items-center rounded-full border bg-background px-2.5 py-1.5 shadow-md">
            <div className="flex items-center gap-2 md:hidden">
              <span className="text-sm font-medium">{ownerName}</span>
              <span className="w-px h-5 bg-border mx-1" aria-hidden="true" />
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.aria} className="text-muted-foreground hover:text-foreground transition-colors">
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <span className="w-px h-5 bg-border mx-1" aria-hidden="true" />
              <ThemeToggle />
            </div>
            <div className="hidden md:flex items-center gap-1 text-sm">
              <a className="px-3 py-1 rounded-full" href="#about">About</a>
              <a className="px-3 py-1 rounded-full" href="#experience">Experience</a>
              <a className="px-3 py-1 rounded-full" href="#education">Education</a>
              <a className="px-3 py-1 rounded-full" href="#projects">Projects</a>
              <a className="px-3 py-1 rounded-full" href="#skills">Skills</a>
              <span className="w-px h-5 bg-border mx-1" aria-hidden="true" />
              <div className="flex items-center gap-2 px-1">
                {socials.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.aria} className="text-muted-foreground hover:text-foreground transition-colors">
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <span className="w-px h-5 bg-border mx-1" aria-hidden="true" />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 animate-enter">
        <section id="about" ref={aboutRef} className="animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight mb-2">hi, im aryan!</h1>
          <p className="text-muted-foreground">
            i like to build reliable, scalable software with a focus on performance, accessibility, and user experience, and, im interested in the cross section of machine learning and software.
          </p>
        </section>

        <section id="experience" ref={expRef} className="mt-12 animate-fade-in">
          <h2 className="text-xl font-medium mb-6">Experience</h2>
          <div className="relative">
            <div className="absolute left-[28%] top-0 bottom-0 border-l" aria-hidden="true" />
            <Accordion type="single" collapsible className="space-y-6">
              {experiences.map((e, idx) => (
                <AccordionItem key={`${e.date}-${idx}`} value={`${e.date}-${idx}`} className="border-0">
                  <div className="grid grid-cols-[28%_1fr] gap-6 items-start animate-fade-in">
                    <div className="text-sm text-muted-foreground">{e.date}</div>
                    <div className="relative pl-6">
                      <span className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                      <div className="flex items-start gap-3">
                        <div className="pt-0.5">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={companyLogoMap[e.company]} alt={`${e.company} logo`} />
                            <AvatarFallback>
                              {e.company.split(' ').map(w => w[0]).join('').slice(0,2)}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="w-full">
                          <AccordionTrigger className="p-0 hover:no-underline">
                            <div className="text-left">
                              <div className="font-medium">{e.company}</div>
                              <div className="text-xs text-muted-foreground font-normal">{e.role}</div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-sm mt-1">{e.desc}</p>
                          </AccordionContent>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>


        <section id="projects" ref={projRef} className="mt-12 animate-fade-in">
          <h2 className="text-xl font-medium mb-6">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((p) => (
              <Card key={p.name} className="hover-scale">
                <CardContent className="p-4">
                  <div className="font-medium">{p.name}</div>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  <a href={p.link} className="story-link text-sm mt-2 inline-block" aria-label={`View ${p.name}`}>
                    View project
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section id="education" ref={eduRef} className="mt-12 animate-fade-in">
          <h2 className="text-xl font-medium mb-6">Education</h2>
          <div className="relative">
            <div className="absolute left-[28%] top-0 bottom-0 border-l" aria-hidden="true" />
            <ul className="space-y-6">
              {education.map((ed) => (
                <li key={ed.date} className="grid grid-cols-[28%_1fr] gap-6 items-start animate-fade-in">
                  <div className="text-sm text-muted-foreground">{ed.date}</div>
                  <div className="relative pl-6">
                    <span className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                    <div className="flex items-start gap-3">
                      <div className="pt-0.5">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={ed.logo} alt={`${ed.school} logo`} />
                          <AvatarFallback>
                            {ed.school.split(' ').map(w => w[0]).join('').slice(0,2)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <div className="font-medium">{ed.school}</div>
                        <div className="text-xs text-muted-foreground font-normal">{ed.degree}</div>
                        <p className="text-sm text-muted-foreground mt-1">{ed.desc}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="skills" ref={skillsRef} className="mt-12 animate-fade-in">
          <h2 className="text-xl font-medium mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>
        </section>


        <footer className="mt-12 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.aria} className="text-muted-foreground hover:text-foreground transition-colors">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="mt-3">© {new Date().getFullYear()} Aryan Khatana</div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
