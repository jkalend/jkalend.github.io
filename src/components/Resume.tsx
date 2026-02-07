import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  GraduationCap,
  Briefcase,
  FlaskConical,
  FolderGit2,
  Trophy,
  Heart,

  Code2,
  Wrench,
  Database,
  Globe,
  Server,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GlowCard } from "@/components/ui/glow-card";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const education = [
  {
    school: "Brno University of Technology, Faculty of Information Technology",
    location: "Brno, Czech Republic",
    degree: "Master's program in Supercomputing",
    date: "2025 - Present",
    notes: [],
  },
  {
    school: "Seoul National University of Science and Technology",
    location: "Seoul, South Korea",
    degree: "Exchange Student",
    date: "September 2024 - December 2024",
    notes: ["Freemovers program, studied subjects based on machine learning"],
  },
  {
    school: "Brno University of Technology, Faculty of Information Technology",
    location: "Brno, Czech Republic",
    degree: "Bachelor's in Information Technology",
    date: "2021 - 2025",
    notes: [
      "Thesis: Detection of a Digital Addiction from Brain Signals",
    ],
  },
];

const skills = {
  "Programming Languages": {
    icon: Code2,
    items: ["Python", "C++", "C", "Go", "TypeScript"],
  },
  DevOps: {
    icon: Server,
    items: ["CircleCI", "GitHub Actions", "Jenkins", "Terraform"],
  },
  Tools: {
    icon: Wrench,
    items: ["Git", "Cursor", "JetBrains suite", "Linux", "Bash", "CMake", "Make", "AWS"],
  },
  "Libraries & Frameworks": {
    icon: Code2,
    items: [
      "PyTorch",
      "Sklearn",
      "Pandas",
      "Numpy",
      "OpenCV",
      "React",
      "NextJS",
      "PyTest",
      "gtest",
    ],
  },
  Languages: {
    icon: Globe,
    items: ["Czech (native)", "English (Fluent)", "Spanish (Basics)", "Korean (Basics)"],
  },
  Databases: {
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "SQL", "Clickhouse", "Elasticsearch"],
  },
};

const workExperience = [
  {
    title: "Associate Software Test Engineer",
    company: "Solarwinds",
    location: "Brno, Czech Republic",
    date: "October 2022 - September 2024",
    bullets: [
      "Development and maintaining internal automation tool for testing written in Python utilizing Selenium and Pytest with features such as priority tests and management of timed runs outside of connected CircleCI",
      "Cooperation with other teams on new features and accommodation of their testing approaches in our tool",
      "Cooperation with DevOps on minimizing test run time, resources and general CI/CD pipeline management",
      "Maintaining a Slack bot for engaging with the testing tool",
    ],
  },
];

const researchExperience = [
  {
    title: "Blockchain Research Assistant",
    org: "Security@FIT, Brno University of Technology",
    date: "September 2022 - July 2023",
    bullets: [
      "Investigation of a DAG chain based Kaspa cryptocurrency and whether it is susceptible to a set of specialized blockchain attacks",
      "Exploration of Kaspa's unique consensus protocol",
    ],
  },
];

const projects = [
  {
    name: "Custom CI/CD Pipeline Manager",
    description:
      "A custom-made, local (but easily extendible) CI/CD pipeline manager built on Python backend and TypeScript + React.",
    link: "https://github.com/jkalend/custom-cicd",
    linkLabel: "GitHub",
    tags: ["Python", "TypeScript", "React", "CI/CD", "Docker"],
  },
  {
    name: "EEG-based Detection of Internet Addiction",
    description:
      "Deep Learning project focused on processing EEG signals, built using Python and PyTorch. Transformer approach with convolutional layers and residual connections as the main structure; LSTM, raw CNNs, and other architectures were also tested.",
    link: "https://huggingface.co/Soromis/BP-transformer-EEG/blob/main/Bachelor_thesis.pdf",
    linkLabel: "Check it out!",
    tags: ["Python", "PyTorch", "Deep Learning", "EEG"],
  },
  {
    name: "Storehouse",
    description:
      "Storehouse system written in Go, architected as Kubernetes-based microservices communicating through gRPC.",
    link: "https://github.com/jkalend/Go-storehouse",
    linkLabel: "GitHub",
    tags: ["Go", "Kubernetes", "gRPC", "Microservices"],
  },
  {
    name: "Turing Machine",
    description:
      "Nondeterministic Turing Machine implementation in Prolog, originally built as DFS but ended up as better performing BFS. Simulates whether the machine accepts a given input string.",
    link: "https://github.com/jkalend/VUT-FLP/tree/main/FLP2",
    linkLabel: "GitHub",
    tags: ["Prolog", "Automata Theory"],
  },
  {
    name: "Digital Piano Tone Synthesis",
    description:
      "Advanced digital signal processing techniques for analyzing and synthesizing piano tones using Python (Jupyter Notebooks). Processes recorded piano samples to extract fundamental frequencies and synthesize new tones.",
    link: "https://github.com/jkalend/VUT-ISS",
    linkLabel: "GitHub",
    tags: ["Python", "DSP", "Signal Processing"],
  },
  {
    name: "Simulation Model of SpaceX's Mars Logistics",
    description:
      "A discrete-event simulation model for analyzing SpaceX's Mars logistics operations, focusing on transportation of materials and supplies to Mars using the Starship spacecraft system. Written in C++ utilizing Simlib library.",
    link: "https://github.com/jkalend/VUT-IMS",
    linkLabel: "Check it out!",
    tags: ["C++", "Simulation", "Simlib"],
  },
];

const competitions = [
  {
    name: "Cyber Heroes Academy",
    org: "Binary Confidence, 2025",
    description:
      "Joined a team of 5 as a SOC analyst, actively trying to prevent multiple types of real-time cyber attacks coming from the red team.",
  },
];

/* ------------------------------------------------------------------ */
/*  Section wrapper                                                    */
/* ------------------------------------------------------------------ */

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      <Separator />
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Resume() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Gradient overlay that transitions via opacity */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-muted/30 transition-opacity duration-200 ease-in-out" />
      <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
        {/* ── Header ─────────────────────────────────────────────── */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 dark:from-blue-300 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Andrea Kalenda
            </span>
          </h1>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Master's Student in Supercomputing
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-muted-foreground text-sm">
            <a
              href="mailto:jkalend@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.6)] transition-all"
            >
              <Mail className="h-4 w-4" />
              jkalend@gmail.com
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a
              href="https://www.linkedin.com/in/andrea-kalenda-a76520238/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.6)] transition-all"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a
              href="https://github.com/jkalend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.6)] transition-all"
            >
              <Github className="h-4 w-4" />
              github.com/jkalend
            </a>
          </div>
        </header>

        {/* ── Education ──────────────────────────────────────────── */}
        <Section icon={GraduationCap} title="Education">
          <div className="space-y-4">
            {education.map((edu, i) => (
              <Card key={i} className="border-none shadow-none bg-transparent py-4">
                <CardHeader className="pb-0 p-0 px-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <CardTitle className="text-base">{edu.degree}</CardTitle>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>
                        {edu.location} &middot; {edu.date}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                {edu.notes.length > 0 && (
                  <CardContent className="pt-2 px-0">
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {edu.notes.map((n, j) => (
                        <li key={j}>{n}</li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </Section>

        {/* ── Technical Skills ───────────────────────────────────── */}
        <Section icon={Code2} title="Technical Skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([category, { icon: CatIcon, items }]) => (
              <GlowCard key={category} className="rounded-xl">
                <Card className="py-4 h-full">
                  <CardHeader className="pb-0">
                    <div className="flex items-center gap-2">
                      <CatIcon className="h-4 w-4 text-muted-foreground" />
                      <CardTitle className="text-sm font-medium">
                        {category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <Badge key={item} variant="secondary" className="font-normal">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </GlowCard>
            ))}
          </div>
        </Section>

        {/* ── Work Experience ────────────────────────────────────── */}
        <Section icon={Briefcase} title="Work Experience">
          <div className="space-y-4">
            {workExperience.map((job, i) => (
              <GlowCard key={i} className="rounded-xl">
                <Card className="py-4">
                  <CardHeader className="pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <CardTitle className="text-base">{job.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground whitespace-nowrap flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span>
                          {job.location} &middot; {job.date}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <ul className="space-y-2 text-sm">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </GlowCard>
            ))}
          </div>
        </Section>

        {/* ── Research Experience ─────────────────────────────────── */}
        <Section icon={FlaskConical} title="Research Experience">
          <div className="space-y-4">
            {researchExperience.map((res, i) => (
              <GlowCard key={i} className="rounded-xl">
                <Card className="py-4">
                  <CardHeader className="pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <CardTitle className="text-base">{res.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{res.org}</p>
                      </div>
                      <p className="text-sm text-muted-foreground whitespace-nowrap">
                        {res.date}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-3">
                    <ul className="space-y-2 text-sm">
                      {res.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </GlowCard>
            ))}
          </div>
        </Section>

        {/* ── Projects ───────────────────────────────────────────── */}
        <Section icon={FolderGit2} title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((proj, i) => (
              <a
                key={i}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <GlowCard className="rounded-xl h-full">
                  <Card
                    className="flex flex-col justify-between py-4 h-full border-blue-200/60 shadow-[0_0_8px_rgba(96,165,250,0.15)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.35)] group-hover:border-blue-300"
                  >
                    <CardHeader className="pb-0">
                      <CardTitle className="text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {proj.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-3 flex-1 flex flex-col justify-between gap-3">
                      <p className="text-sm text-muted-foreground">{proj.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </GlowCard>
              </a>
            ))}
          </div>
        </Section>

        {/* ── Competitions ───────────────────────────────────────── */}
        <Section icon={Trophy} title="Competitions">
          <div className="space-y-4">
            {competitions.map((comp, i) => (
              <GlowCard key={i} className="rounded-xl">
                <Card className="py-4">
                  <CardHeader className="pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <CardTitle className="text-base">{comp.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{comp.org}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-sm text-muted-foreground">{comp.description}</p>
                  </CardContent>
                </Card>
              </GlowCard>
            ))}
          </div>
        </Section>

        {/* ── Extracurricular ────────────────────────────────────── */}
        <Section icon={Heart} title="Extracurricular Activities">
          <GlowCard className="rounded-xl">
            <Card className="py-4">
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>Archery club member in a local club &mdash; 2019 - 2023</span>
                </div>
              </CardContent>
            </Card>
          </GlowCard>
        </Section>

        {/* ── Footer ─────────────────────────────────────────────── */}
        <footer className="text-center text-xs text-muted-foreground pt-6 pb-2">
          Built with Astro, React &amp; shadcn/ui
        </footer>
      </div>
    </div>
  );
}
