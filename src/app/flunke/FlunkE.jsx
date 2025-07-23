"use client";

import { useEffect, useState } from "react";
const FlunkE = () => {

  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

    }
  }, []);
  
  return (
    <div>
      
      {/* Hero Section */}

      <section className="relative h-[250vh] flex flex-col items-center justify-center bg-white overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.7))] before:pointer-events-none before:z-20">
      
      {/* Parallax Notizblasen */}

      <div 
        className='absolute bg-white w-72 md:w-96 h-auto z-30 rounded-3xl shadow-2xl left-1/2 lg:left-20 transform -translate-x-1/2 lg:translate-x-0' 
        style={{
          top: windowWidth < 1024 ? '84%' : '65%',
          opacity: Math.max(0, Math.min(1.2, 1 - Math.abs(scrollY -800) / 1200)),
          transform: `translate(-0%, calc(-50% + ${scrollY * -0.3 }px))`
        }}>
        <p className='p-8'><b>🏐 Innovatives Gameplay:</b> Ein Flunkyball-Spiel mit integriertem Sensor im Ball, der Würfe und Treffer erkennt und spezielle Events auslöst.</p>
      </div>
      <div 
        className='absolute bg-white w-72 md:w-96 h-auto z-30 rounded-3xl shadow-2xl left-1/2 lg:left-8/12 transform -translate-x-1/2 lg:translate-x-0' 
        style={{
          top: windowWidth < 1024 ? '98%' : '84%',
          opacity: Math.max(0, Math.min(1.2, 1 - Math.abs(scrollY - 1000) / 1200)),
          transform: `translate(-0%, calc(-50% + ${scrollY * -0.3 }px))`
        }}>
        <p className='p-8'><b>⚙️ Technische Umsetzung:</b> Der Sensor sendet Daten in Echtzeit an eine App, die das Spielgeschehen dynamisch steuert.</p>
      </div>
      <div 
        className='absolute bg-white w-72 md:w-96 h-auto z-30 rounded-3xl shadow-2xl left-1/2 lg:left-3/12 transform -translate-x-1/2' 
        style={{
          top: windowWidth < 1024 ? '112%' : '98%',
          opacity: Math.max(0, Math.min(1.2, 1 - Math.abs(scrollY - 1200) / 1200)),
          transform: `translate(-0%, calc(-50% + ${scrollY * -0.3 }px))`
        }}>
        <p className='p-8'><b>📱 Interaktive App:</b> Live-Anzeige von Regeln, Herausforderungen und Spielständen – direkt angepasst an die Sensordaten.</p>
      </div>
      
      {/* Parallax Image */}
      
      <img 
        src="/assets/flunke/bowling.png"
        className='absolute w-80'
        style={{
          top: '55%',
          left: window.innerWidth < 768 ? "5%" : "25%",
          maxWidth: window.innerWidth < 768 ? "250px" : "400px",
          width: "100%",
          objectFit: "contain",
          zIndex: "10",
          transform: `translate(-0%, calc(-50% + ${scrollY * 0.5 }px))`
        }}></img>
      <img 
        src="/assets/flunke/win.png"
        className='absolute w-80'
        style={{
          top: '5%',
          left: window.innerWidth < 768 ? "65%" : "75%",
          maxWidth: window.innerWidth < 768 ? "250px" : "400px",
          width: "100%",
          objectFit: "contain",
          zIndex: "10",
          transform: `translate(-0%, calc(-50% + ${scrollY * 0.5 }px))`
        }}></img>
      <img 
        src="/assets/flunke/bier.png"
        className='absolute w-80'
        style={{
          top: '25%',
          left: '1%',
          maxWidth: window.innerWidth < 768 ? "250px" : "400px",
          width: "100%",
          objectFit: "contain",
          zIndex: "10",
          transform: `translate(-0%, calc(-50% + ${scrollY * 0.5 }px)) rotate(-15deg)`
        }}></img>
      <img 
        src="/assets/flunke/tornado.png"
        className='absolute w-80'
        style={{
          top: '45%',
          left: window.innerWidth < 768 ? "60%" : "70%",
          maxWidth: window.innerWidth < 768 ? "250px" : "400px",
          width: "100%",
          objectFit: "contain",
          zIndex: "10",
          transform: `translate(-0%, calc(-50% + ${scrollY * 0.5 }px))`
        }}></img>
      <img
        src="/assets/flunke/Flunk_Screen.png"
        alt="Flunk-E Screenshot"
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2"
        style={{
          top: '45%',
          maxWidth: window.innerWidth < 768 ? "300px" : "400px",
          width: "100%",
          objectFit: "contain",
          zIndex: "10",
          transform: `translate(-0%, calc(-50% + ${scrollY * 0.1}px)) scale(${Math.max(0.8, 1 - scrollY * 0.0005)})`
        }}
      />

      {/* Title */}

      <h1 className="absolute top-80 text-7xl md:text-9xl font-bold text-black mb-12 font-syne"
        style={{
          zIndex: "1",
          opacity: Math.max(0, 1 - scrollY * 0.005),
          transform: `translate(-0%, calc(-50% + ${scrollY * 0.1}px)) scale(${Math.max(0.8, 1 - scrollY * 0.001)})`
        }}>
        Flunk-E
      </h1>
    </section>
    </div>
  )
}

export default FlunkE