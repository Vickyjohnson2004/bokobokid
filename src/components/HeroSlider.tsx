import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/new1.jpeg";
import heroSlide2 from "@/assets/new5.jpeg";
import heroSlide3 from "@/assets/new6.jpg";
import heroSlide4 from "@/assets/new4.jpg";

const slides = [
  {
    id: 1,
    image: heroSlide1,
    title: "Discover African Ancient Wisdom",
    subtitle: "Empowering the next generation with timeless knowledge",
    description:
      "Journey through the rich tapestry of African heritage and discover the profound wisdom that has guided generations.",
    cta: "Explore Our Village",
    ctaHref: "/village",
  },
  {
    id: 2,
    image: heroSlide2,
    title: "Ancient Kingdoms, Modern Learning",
    subtitle: "Where history meets innovation",
    description:
      "Connect children to the magnificent legacy of African civilizations through engaging stories and interactive learning.",
    cta: "Start Learning",
    ctaHref: "/start-learning",
  },
  {
    id: 3,
    image: heroSlide3,
    title: "Stories That Shape Hearts",
    subtitle: "Passing wisdom through generations",
    description:
      "Experience the power of storytelling as we share the values and traditions that build strong character and community.",
    cta: "Listen to Stories",
    ctaHref: "/stories",
  },
  {
    id: 4,
    image: heroSlide4,
    title: "Bridging Worlds",
    subtitle: "Ancient wisdom meets modern technology",
    description:
      "Innovative approaches to learning that honor our past while preparing children for a bright future.",
    cta: "Join the Movement",
    ctaHref: "/join",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-3xl">
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    index === currentSlide
                      ? "animate-slide-in-left"
                      : "translate-x-[-100px] opacity-0"
                  }`}
                >
                  <h2 className="text-primary-glow font-ubuntu text-lg font-medium mb-4 tracking-wide">
                    {slide.subtitle}
                  </h2>
                  <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-xl mb-8 leading-relaxed font-ubuntu max-w-2xl">
                    {slide.description}
                  </p>
                  <a
                    href={slide.ctaHref || "#"}
                    className="inline-block bg-primary text-white font-ubuntu text-lg px-8 py-4 rounded hover:bg-primary-dark transition"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-sunset transition-all duration-1000 ease-linear"
          style={{
            width: isAutoPlaying ? "100%" : "0%",
            animation: isAutoPlaying ? "progress 6s linear infinite" : "none",
          }}
        />
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};
