import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollVideoHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            progressRef.current = self.progress;
          },
        },
      });

      tl.fromTo(
        video,
        { scale: 0.3, yPercent: -30 },
        { scale: 1, yPercent: 0, ease: "none" }
      );
    }, container);

    const handleMouseMove = (e: MouseEvent) => {
      if (!video || !container) return;

      const videoRect = video.getBoundingClientRect();
      const videoCenterX = videoRect.left + videoRect.width / 2;
      const videoCenterY = videoRect.top + videoRect.height / 2;

      const x = (e.clientX - videoCenterX) / (videoRect.width / 2);
      const y = (e.clientY - videoCenterY) / (videoRect.height / 2);

      // Influence decreases as scroll progresses (1 → 0)
      const influence = (1 - progressRef.current) * 0.2;

      gsap.to(video, {
        x: x * 60 * influence,
        y: y * 40 * influence,
        rotateY: x * 10 * influence,
        rotateX: -y * 10 * influence,
        transformPerspective: 800,
        ease: "power2.out",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative mx-w-7xl mx-10 h-[200vh] bg-transparent flex items-center justify-center z-30 overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/videos/showcase.mov"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-auto max-h-[80vh] mt-20 xl:mt-40 object-cover rounded-3xl"
      />
    </section>
  );
}
