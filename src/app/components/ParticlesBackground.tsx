'use client';
import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: ["#facc15", "#dc2626"] },
          shape: { type: "circle" },
          opacity: { value: 0.15 },
          size: { value: 4, random: true },
          move: { enable: true, speed: 0.6, direction: "none", outModes: { default: "out" } },
          links: { enable: true, color: "#facc15", opacity: 0.1, width: 1 },
        },
        interactivity: {
          events: { onHover: { enable: false }, onClick: { enable: false } },
        },
        detectRetina: true,
      }}
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}
    />
  );
} 