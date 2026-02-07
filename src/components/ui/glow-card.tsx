import * as React from "react";
import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.ComponentProps<"div"> {
  glowColor?: string;
}

function GlowCard({
  className,
  glowColor = "rgba(96, 165, 250, 0.15)",
  children,
  ...props
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setGlow({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        visible: true,
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setGlow((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {/* Glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-xl transition-opacity duration-300"
        style={{
          opacity: glow.visible ? 1 : 0,
          background: `radial-gradient(400px circle at ${glow.x}px ${glow.y}px, ${glowColor}, transparent 30%)`,
        }}
      />
      {children}
    </div>
  );
}

export { GlowCard };
