"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  type: string;
  image: string;
  topPadding: string;
  backgroundColor: string;
  detailUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  visible?: boolean; // NEU: Sichtbarkeit
}

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Flunk-E",
      type: "IoT-App",
      image: "/images/projects/flunke01.png",
      topPadding: "pt-0",
      backgroundColor: "bg-orange-100",
      detailUrl: "/projects/flunke",
      githubUrl: "https://github.com/joosthasch/flunke",
      visible: true
    },
    {
      id: 2,
      title: "Van Goghs Gedankenwelt",
      type: "VR Anwendung",
      image: "/images/projects/vangogh.png",
      topPadding: "pt-16",
      backgroundColor: "bg-purple-100",
      detailUrl: "/projects/van-gogh",
      visible: false // ausgeblendet
    },
    {
      id: 3,
      title: "Willenbrock",
      type: "Usability Untersuchung",
      image: "/images/projects/willenbrock/willenbrock.png",
      topPadding: "pt-8",
      backgroundColor: "bg-green-100",
      detailUrl: "/projects/willenbrock",
      visible: true
    }
  ];

  const visibleProjects = projects.filter(p => p.visible !== false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const smoothOptions = {
    damping: 30,
    stiffness: 300,
    mass: 1.5,
    };

  const getBackgroundColor = () => {
    if (hoveredIndex === null) return 'bg-white';
    return visibleProjects[hoveredIndex]?.backgroundColor || 'bg-gray-100';
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`flex flex-col relative font-archivo overflow-hidden transition-colors duration-500 pb-20 ${getBackgroundColor()}`}
      onMouseMove={handleMouseMove}
    >
      {/* Header */}
      <div className="pt-20 pb-8 px-6 md:px-20">
        <div className="w-full">
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-light text-gray-900">
            Projekte
          </h2>
        </div>
      </div>

      {/* Projects List */}
      <div className="flex-1 flex items-center px-6 md:px-20 py-20">
        <div className="w-full">
          {visibleProjects.map((project, index) => (
            <div key={project.id}>
              {/* Project Row (relative for absolute separator) */}
              <div
                className="relative group w-full py-6 md:py-8 flex items-center justify-between cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex-1 py-6">
                  {project.detailUrl ? (
                    <Link
                      href={project.detailUrl}
                      className="text-3xl md:text-4xl lg:text-7xl font-light text-gray-600 hover:text-black transition-colors duration-300 flex items-center"
                    >
                      {project.title}
                      <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  ) : (
                    <div className="flex items-center">
                      <h3 className="text-3xl md:text-4xl lg:text-7xl font-light text-gray-900">
                        {project.title}
                      </h3>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-sm md:text-base text-gray-600 font-light">
                    {project.type}
                  </span>
                </div>
                {/* Separator line (visible, part of hover area) */}
                {index < visibleProjects.length - 1 && (
                  <div className="absolute left-0 bottom-0 w-full border-b border-black" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Strip */}
      {hoveredIndex !== null && (
        <motion.div
          className="absolute pointer-events-none w-80 h-80 overflow-hidden rounded-lg shadow-lg hidden md:block"
          initial={{
            top: mousePosition.y,
            left: mousePosition.x
          }}
          animate={{
            top: mousePosition.y,
            left: mousePosition.x
          }}
          transition={{
            type: "spring",
            ...smoothOptions
          }}
          style={{
            transform: 'translate(-50%, -50%)'
          }}
        >
          <motion.div
            animate={{ y: -hoveredIndex * 320 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {visibleProjects.map((p) => (
              <Image
                key={p.id}
                src={p.image}
                alt={p.title}
                width={320}
                height={320}
                className="w-80 h-80 object-cover"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;