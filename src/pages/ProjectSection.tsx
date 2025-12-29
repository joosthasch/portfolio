"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Hidden Gems",
    title2: "Mobile App",
    year: "2025",
    image: "/images/projects/hidden_gems.png",
    hoverImage: "/images/projects/hidden-gems_hover.png",
    subtitle:
      "MOBILE APP, FIGMA, PROTOTYPING, UI, UX, USER FLOW, WIREFRAMES, UI DESIGN, MAP INTEGRATION",
    icon: "/images/projects/icons/hidden-gems_icon.png",
    path: "/projects/hidden-gems",
  },
  {
    title: "Päddl",
    title2: "Mobile App",
    year: "2024",
    image: "/images/projects/paeddl.png",
    hoverImage: "/images/projects/paeddl_hover.png",
    subtitle:
      "MOBILE APP, FIGMA, PROTOTYPING, UI, UX, USER FLOW, WIREFRAMES, UI DESIGN, SOCIAL FEATURES",
    icon: "/images/projects/icons/paeddl_icon.png",
    path: "/projects/paeddl",
  },
  {
    title: "Flunk-E",
    title2: "IoT-App",
    year: "2025",
    image: "/images/projects/flunke.png",
    hoverImage: "/images/projects/flunke_hover.png",
    subtitle:
      "IOT, TYPESCRIPT, ANGULAR, CAPACITOR, BLUETOOTH, UX, UI, PROTOTYPING, FIGMA, SENSOR DATA, REALTIME-DATA, MOBILE APP",
    icon: "/images/projects/icons/Flunk-E_Icon.png",
    path: "/projects/flunke",
  },
  {
    title: "Van Goghs Gedankenwelt",
    title2: "VR Anwendung",
    year: "2025",
    image: "/images/projects/VanGogh_VR_Laptop.png",
    hoverImage: "/images/projects/vangogh_hover.png",
    subtitle:
      "UNITY, BLENDER, OPENAI API, META QUEST, VR INTERACTION, SPEECH-TO-TEXT, VR ENVIRONMENT, SPEECH RECOGNITION, UI, UX",
    icon: "/images/projects/icons/VanGogh_Icon.png",
    path: "/projects/van-gogh",
  },
  {
    title: "Willenbrock",
    title2: "Usability Untersuchung",
    year: "2025",
    image: "/images/projects/Willenbrock_Labor.png",
    hoverImage: "/images/projects/willenbrock_hover.png",
    subtitle:
      "USABILITY TESTING, USER RESEARCH, DATA ANALYSIS, THINK-ALOUD, INTERFACE OPTIMIZATION, USER FEEDBACK, UI, UX",
    icon: "/images/projects/icons/willenbrock.png",
    path: "/projects/willenbrock",
  }
];

function Marquee({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const spans = inner.querySelectorAll(".marquee-text");
    if (spans.length < 2) {
      inner.innerHTML = `<span class="marquee-text">${text}</span><span class="marquee-text ml-8">${text}</span>`;
    }

    const textWidth = (inner.firstChild as HTMLElement)?.offsetWidth ?? 0;
    const totalDistance = textWidth;
    const duration = totalDistance / 30;

    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(
      inner,
      { x: 0 },
      {
        x: -totalDistance,
        duration,
        ease: "linear",
      }
    );

    return () => {
      tl.kill();
    };
  }, [text]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden h-5 sm:h-6">
      <div
        ref={innerRef}
        className="flex absolute left-0 top-0 whitespace-nowrap text-xs sm:text-sm md:text-base text-zinc-400 font-fira"
        style={{ willChange: "transform" }}
      >
        <span className="marquee-text mr-8">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  function handleMouseEnter() {
    if (isMobile) return;
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        scale: 1.05,
        filter: "blur(8px)",
        duration: 0.1,
        ease: "power1.out",
      });
    }
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }

  function handleMouseLeave() {
    if (isMobile) return;
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        scale: 1,
        filter: "blur(0px)",
        duration: 0.1,
        ease: "power1.out",
      });
    }
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }

  useEffect(() => {
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { opacity: 0, scale: 0.7 });
    }
  }, []);

  return (
    <div
      className="bg-[#141414] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl flex flex-col relative cursor-pointer px-4 sm:px-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image area */}
      <div className="flex justify-center items-center pt-4 sm:pt-5 pb-0 relative min-h-[180px] sm:min-h-[220px]">
        <div className="overflow-hidden rounded-lg sm:rounded-xl w-full h-full">
          <Image
            ref={imgRef}
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-all duration-300"
            style={{ background: "#222" }}
          />
        </div>

        {project.hoverImage && (
          <div
            ref={overlayRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 2 }}
          >
            <Image
              src={project.hoverImage}
              alt="Overlay"
              width={350}
              height={200}
              className="w-[70%] rounded-lg shadow-2xl"
              style={{ background: "#fff" }}
            />
          </div>
        )}
      </div>

      {/* Info area */}
      <div className="flex flex-col justify-end flex-1 pb-4 sm:pb-6 pt-4 sm:pt-6 w-full bg-[#141414]">
        {/* Mobile: stacked layout, Desktop: side-by-side */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-4 sm:mb-6 gap-3 sm:gap-4">
          {/* Left side: icon + title */}
          <div className="flex items-center gap-3 sm:gap-4">
            {project.icon && (
              <Image
                src={project.icon}
                alt="Avatar"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
              />
            )}
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white font-fira">
              {project.title}
            </span>
          </div>

          {/* Right side: title2 + year */}
          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base lg:text-xl">
            <span className="font-medium text-white font-fira">
              {project.title2}
            </span>
            <span className="font-medium text-zinc-400 font-fira">
              {project.year}
            </span>
          </div>
        </div>

        <Marquee text={project.subtitle} />
      </div>
    </div>
  );
}

export default function ProjectSection() {
  return (
    <section id="projects" className="w-full bg-white rounded-t-2xl sm:rounded-t-3xl pb-40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black italic uppercase font-fira text-[#141414] mb-8 sm:mb-12 md:mb-16 px-4 sm:px-5 md:px-5 mx-4 sm:mx-5 text-start">
          PROJEKTE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-5 md:px-5 mx-4 sm:mx-5 pt-4 pb-4 sm:pb-5 rounded-2xl sm:rounded-3xl">
          {projects.map((project) => (
            <Link
              key={project.path}
              href={project.path}
              className="block"
              aria-label={`Open project ${project.title}`}
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}