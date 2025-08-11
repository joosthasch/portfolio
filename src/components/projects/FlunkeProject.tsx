"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Play, Zap, Smartphone, Target, Trophy, ArrowRight, Github,  Bluetooth, Wifi, Code } from 'lucide-react';

const FlunkeProject: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Intersection Observer für Scroll-Animationen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const playVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatische Treffererkennung",
      description: "Ball-Sensor erkennt jeden Treffer sofort"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App mit Live-Regeln",
      description: "Dynamische Regeln und Events in Echtzeit"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Neue Spielmodi & Challenges",
      description: "Erweiterte Varianten für mehr Abwechslung"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Scoreboard in Echtzeit",
      description: "Live-Tracking aller Spielergebnisse"
    }
  ];

  const techStack = [
    {
      category: "Hardware",
      icon: <Zap className="w-6 h-6" />,
      items: ["Beschleunigungssensor", "Gyroscope", "Bluetooth-Modul"]
    },
    {
      category: "Kommunikation",
      icon: <Wifi className="w-6 h-6" />,
      items: ["Bluetooth Low Energy", "WebSocket"]
    },
    {
      category: "App",
      icon: <Code className="w-6 h-6" />,
      items: ["Angular", "Ionic", "TypeScript"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero-Bereich */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hintergrund-Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-20"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/flunke-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            Flunke
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-light">
            Extreme IoT-Variante von Flunkyball
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Mit Sensorball, App und Event-Regeln für maximale Spannung
          </p>
          
          <button
            onClick={playVideo}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center mx-auto"
          >
            <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            Gameplay ansehen
          </button>
        </div>

        {/* Scroll-Indikator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Kurze Projektbeschreibung */}
      <section 
        id="description"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          visibleSections.includes('description') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong className="text-blue-600">Flunke</strong> ist eine modernisierte Version des Trinkspiels Flunkyball. 
            Ein Sensor im Ball erkennt Treffer und löst automatisch Aktionen und Regeln in einer App aus. 
            <br />
            <span className="text-blue-600 font-semibold">Das Ergebnis: mehr Dynamik, weniger Diskussion, mehr Spaß.</span>
          </p>
        </div>
      </section>

      {/* Visual Storytelling */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Von der Idee zur Innovation
          </h2>

          {/* Story Section 1: Idee & Inspiration */}
          <div 
            id="story-1"
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-1000 ${
              visibleSections.includes('story-1') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative">
              <Image
                src="/images/flunke/original-flunkyball.jpg"
                alt="Original Flunkyball Spiel"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-semibold">
                Inspiration
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Die Idee
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Flunkyball ist ein beliebtes Trinkspiel, aber oft entstehen Diskussionen: 
                War das ein Treffer? Wer darf als nächstes? Haben alle zur gleichen Zeit getrunken?
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong>Die Lösung:</strong> Technologie, die objektiv entscheidet und das Spiel 
                um neue Regeln und Events erweitert.
              </p>
            </div>
          </div>

          {/* Story Section 2: Technik */}
          <div 
            id="story-2"
            data-animate
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-1000 ${
              visibleSections.includes('story-2') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Die Technik
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Ein speziell entwickelter Sensorball kommuniziert in Echtzeit mit der App. 
                Beschleunigungssensoren und Gyroscope erkennen präzise, ob und wie stark 
                der Ball getroffen wurde.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full">
                  <Bluetooth className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 dark:text-blue-200">Bluetooth LE</span>
                </div>
                <div className="flex items-center bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full">
                  <Zap className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800 dark:text-green-200">Sensortechnik</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <Image
                src="/images/flunke/sensor-ball.jpg"
                alt="Sensorball mit App"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                IoT-Innovation
              </div>
            </div>
          </div>

          {/* Story Section 3: Gameplay */}
          <div 
            id="story-3"
            data-animate
            className={`text-center transition-all duration-1000 ${
              visibleSections.includes('story-3') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Das Gameplay-Erlebnis
            </h3>
            <div className="relative max-w-4xl mx-auto">
              {!isVideoPlaying ? (
                <div 
                  className="relative cursor-pointer group"
                  onClick={playVideo}
                >
                  <Image
                    src="/images/flunke/gameplay-preview.jpg"
                    alt="Flunke Gameplay"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="bg-white/90 rounded-full p-6 group-hover:scale-110 transition-transform">
                      <Play className="w-12 h-12 text-blue-600" />
                    </div>
                  </div>
                </div>
              ) : (
                <video
                  ref={videoRef}
                  className="w-full rounded-lg shadow-xl"
                  controls
                  autoPlay
                >
                  <source src="/videos/flunke-gameplay.mp4" type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Features */}
      <section 
        id="features"
        data-animate
        className={`py-20 px-6 bg-white dark:bg-gray-800 transition-all duration-1000 ${
          visibleSections.includes('features') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Game-Changing Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technische Umsetzung */}
      <section 
        id="tech"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          visibleSections.includes('tech') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Technische Umsetzung
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {tech.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interesse geweckt?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Erfahre mehr über meine anderen Projekte oder lass uns über neue Ideen sprechen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/joosthasch/flunke"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Github className="w-5 h-5 mr-2" />
              Code auf GitHub
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              Mehr Projekte ansehen
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlunkeProject;