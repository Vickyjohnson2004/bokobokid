import { useEffect, useRef } from "react";
import artifactsImage from "@/assets/african-artifacts.jpg";
import patternsImage from "@/assets/african-patterns.jpg";
import floatingMask from "@/assets/floating-mask.png";
import src from "@/assets/video3.mp4";

import pic from "@/assets/hero-slide-1.jpg";
import { motion } from "framer-motion";

export const CulturalArtifacts = () => {
  const artifactsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (artifactsRef.current) {
      observer.observe(artifactsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted pattern-tribal">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={artifactsRef} className="text-center mb-2">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
            Cultural Heritage
          </h2>
          <p className="text-xl mb-4 text-muted-foreground font-ubuntu max-w-3xl mx-auto leading-relaxed">
            Explore the rich tapestry of African cultural artifacts that tell
            the stories of our ancestors and inspire the next generation of
            global citizens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Artifacts Showcase */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-deep">
              <img
                src={artifactsImage}
                alt="African Cultural Artifacts"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Elements */}
              <div className="absolute top-8 right-8 animate-float">
                <img
                  src={floatingMask}
                  alt="Floating Mask"
                  className="w-20 h-20 opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  Ancient Wisdom
                </h3>
                <p className="font-ubuntu text-white/90">
                  Preserved through generations
                </p>
              </div>
            </div>

            {/* Patterns Overlay */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-30 animate-rotate-gentle">
              <img
                src={patternsImage}
                alt="African Patterns"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="w-[600px] h-[300px] rounded-lg overflow-hidden shadow-lg">
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-fill"
              />
            </div>

            <div className="pt-2">
              <div className="px-6 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <h4 className="font-playfair text-xl font-bold text-foreground mb-3">
                  Living Heritage
                </h4>
                <p className="text-muted-foreground font-ubuntu leading-relaxed">
                  These artifacts are not merely historical objects but living
                  symbols of a rich cultural heritage that continues to inspire
                  and educate children about their roots and the wisdom of their
                  ancestors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16 overflow-hidden">
        <motion.img
          src={pic}
          alt="Cultural Artifacts"
          className="w-[70%] h-auto rounded-lg shadow-lg"
          animate={{ x: [0, 100, 0, -100, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
          }}
        />
      </div>
    </section>
  );
};
