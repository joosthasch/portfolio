import React from 'react';
import Image from 'next/image';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend",
      icon: <Database className="w-8 h-8 text-green-600" />,
      technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      category: "Tools & Others",
      icon: <Code className="w-8 h-8 text-orange-600" />,
      technologies: ["Git", "Docker", "AWS", "Figma", "Jest"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer with a love for creating amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/images/about-me.jpg"
                alt="About me"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Hi, Im a Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Im a passionate full-stack developer with over 3 years of experience 
              creating web applications and mobile solutions. I love turning complex 
              problems into simple, beautiful designs and bringing ideas to life through code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              When Im not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing my knowledge through 
              blog posts and mentoring fellow developers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    {skill.icon}
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white ml-3">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;