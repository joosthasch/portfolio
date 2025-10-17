import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const projects = [
  {
    title: "Van Goghs Gedankenwelt",
    title2: "VR ANWENDUNG",
    year: "2025",
    image: "/images/projects/VanGogh_VR_Laptop.png",
    hoverImage: "/images/projects/VanGogh_VR_Laptop.png",
    subtitle: "UNITY, BLEDNER, OPENAI API, META QUEST, VR INTERACTION, SPEECH-TO-TEXT, VR ENVIRONMENT, SPEECH RECOGNITION, UI, UX",
    icon: "/images/projects/flunke.png",
  },
  {
    title: "Willenbrock",
    title2: "Usability Untersuchung",
    year: "2025",
    image: "/images/projects/Willenbrock_Labor.png",
    hoverImage: "/images/projects/VanGogh_VR_Laptop.png",
    subtitle: "USABILITY TESTING, USER RESEARCH, DATA ANALYSIS, THINK-ALOUD, INTERFACE OPTIMIZATION, USER FEEDBACK, UI, UX",
    icon: "/images/projects/flunke.png",
  },
  {
    title: "Flunk-E",
    title2: "IoT-App",
    year: "2025",
    image: "/images/projects/Flunk-E_Flasche_Ball.png",
    hoverImage: "/images/projects/VanGogh_VR_Laptop.png",
    subtitle: "IOT, TYPESCRIPT, ANGULAR, CAPACITOR, BLUETHOOTH, UX, UI, PROTOTYPING, FIGMA, SENSOR DATA, REALTIME-DATA, MOBILE APP",
    icon: "/images/projects/icons/Flunk-E_Icon.png",
  },
  {
    title: "JAZMIN WONG",
    title2: "PORTFOLIO",
    year: "2025",
    image: "/images/projects/VanGogh_VR_Laptop.png",
    hoverImage: "/images/projects/VanGogh_VR_Laptop.png",
    subtitle: "MATTER.JS, LENIS, VERCEL, ART DIRECTION, VOICE & TONE, UI, UX, ...",
    icon: "/images/projects/flunke.png",
  },
];

function Marquee({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // Duplicate text for seamless loop
    const spans = inner.querySelectorAll(".marquee-text");
    if (spans.length < 2) {
      inner.innerHTML = `<span class="marquee-text">${text}</span><span class="marquee-text ml-8">${text}</span>`;
    }

    // Get widths
    const textWidth = (inner.firstChild as HTMLElement)?.offsetWidth ?? 0;

    // Animate with GSAP
    const totalDistance = textWidth;
    const duration = totalDistance / 30; // adjust speed (30px/sec)

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

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [text]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden h-6">
      <div
        ref={innerRef}
        className="flex absolute left-0 top-0 whitespace-nowrap text-sm md:text-base text-neutral-400 font-montserrat"
        style={{ willChange: "transform" }}
      >
        <span className="marquee-text mr-8">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
}

// Card component with hover effect
function ProjectCard({ project }: { project: typeof projects[0] }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle hover animation
  function handleMouseEnter() {
    // Hauptbild: Zoom & Blur
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        scale: 1.05,
        filter: "blur(8px)",
        duration: 0.1,
        ease: "power1.out",
      });
    }
    // Overlay-Bild: Fade/Scale-In
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
    // Reset Hauptbild
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        scale: 1,
        filter: "blur(0px)",
        duration: 0.1,
        ease: "power1.out",
      });
    }
    // Overlay-Bild Fade/Scale-Out
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
      className="bg-[#141414] rounded-2xl overflow-hidden shadow-xl flex flex-col relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image area */}
      <div className="flex justify-center items-center pt-5 pb-0 px-5 relative" style={{ minHeight: 220 }}>
        <div className="overflow-hidden rounded-xl">
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
        {/* Overlay image, centered and animated */}
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
              style={{
                background: "#fff",
              }}
            />
          </div>
        )}
      </div>
      {/* Info area */}
      <div className="flex flex-col justify-end flex-1 px-6 pb-6 pt-6 w-full bg-[#141414]">
        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center gap-4">
            {project.icon && (
              <Image
                src={project.icon}
                alt="Avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
            )}
            <span className="text-base uppercase md:text-xl font-semibold text-white font-montserrat">
              {project.title}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-base md:text-xl font-semibold text-white font-montserrat">
              {project.title2}
            </span>
            <span className="text-base md:text-xl font-semibold text-neutral-400 font-montserrat">
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
    <section className="w-full bg-white py-24">
      <h2 className="text-4xl md:text-9xl font-black uppercase font-montserrat text-black mb-12 text-start px-10 md:px-10">
        My Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-5 mx-5 pt-5 pb-5 rounded-3xl">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}