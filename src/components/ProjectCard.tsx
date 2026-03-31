import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/glow-card";
import { Github } from "lucide-react";
import type { Project } from "@/lib/projects";

function SourceIcon({ url }: { url: string }) {
  if (url.includes("github.com")) {
    return <Github className="h-4 w-4 shrink-0 text-muted-foreground" />;
  }
  if (url.includes("huggingface.co")) {
    return (
      <svg
        className="h-4 w-4 shrink-0 text-muted-foreground"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Hugging Face"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-5 6c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>
    );
  }
  return null;
}

interface ProjectCardProps {
  project: Project;
  variant?: "compact" | "detailed";
}

export function ProjectCard({ project, variant = "compact" }: ProjectCardProps) {
  const isDetailed = variant === "detailed";

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <GlowCard className="h-full rounded-xl transition-transform duration-300 ease-out group-hover:scale-[1.02]">
        <Card
          className={`flex h-full flex-col justify-between border border-blue-200/60 bg-muted/25 shadow-[0_0_8px_rgba(96,165,250,0.15)] transition-all duration-300 dark:bg-muted/35 group-hover:border-blue-300 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.35)] ${
            isDetailed ? "gap-5 px-1 py-5 sm:px-2" : "py-4"
          }`}
        >
          <CardHeader className={isDetailed ? "space-y-3 pb-0" : "pb-0"}>
            <div className="flex items-center gap-2">
              <SourceIcon url={project.link} />
              <CardTitle
                className={`transition-colors ${
                  isDetailed ? "text-lg sm:text-xl" : "text-base"
                }`}
              >
                {project.name}
              </CardTitle>
            </div>
            {isDetailed && (
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardHeader>
          <CardContent
            className={`flex flex-1 flex-col justify-between ${
              isDetailed ? "gap-4 pt-0" : "gap-3 pt-3"
            }`}
          >
            <p className={isDetailed ? "text-sm leading-7 text-muted-foreground sm:text-base" : "text-sm text-muted-foreground"}>
              {project.description}
            </p>
            {!isDetailed && (
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </GlowCard>
    </a>
  );
}
