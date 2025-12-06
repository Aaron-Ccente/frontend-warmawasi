"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";
import Image from "next/image";

interface SliderSection {
  phrase: string;
  smallPhrase: string;
  button: boolean;
  background: string;
  alt: string;
  title: string;
}

const sections: SliderSection[] = [
  {
    phrase: "Estamos contigo y para ti",
    smallPhrase:
      "Con nuestras terapias virtuales, transformamos tu vida y te acompañamos en cada paso de tu camino hacia la sanación.",
    button: true,
    background: "/CarruselImages/imagen01-carrusel.webp",
    alt: "Estamos contigo en tu proceso de sanación",
    title: "Terapias virtuales y bienestar emocional",
  },
  {
    phrase: "Apoyo a un click de distancia",
    smallPhrase:
      "Nuestras terapias virtuales te permiten cuidar de tu bienestar desde la comodidad de tu hogar cuando más lo necesites.",
    button: true,
    background: "/CarruselImages/imagen01-carrusel.webp",
    alt: "Terapias virtuales para ti estés donde estés",
    title: "Tu bienestar a un click de distancia",
  },
  {
    phrase: "Tu bienestar emocional inicia aqui",
    smallPhrase:
      "Transforma tu vida con nuestras terapias diseñadas para ayudarte a sanar y crecer.",
    button: true,
    background: "/CarruselImages/imagen01-carrusel.webp",
    alt: "Terapia online centro psicológico contigo voy, te ayudamos a sanar y crecer",
    title: "Tu bienestar emocional es importante",
  },
  {
    phrase: "No dejemos que el silencio sea el enemigo",
    smallPhrase:
      "8 de cada 10 peruanos no reciben la atención mental que necesitan.",
    button: true,
    background: "/CarruselImages/imagen01-carrusel.webp",
    alt: "La salud mental es importante, estamos aqui para escucharte",
    title: "No seas parte de la estadística, hablar es el primer paso",
  },
];

export default function Carrusel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
      skipSnaps: false,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Manejo de selección de slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Navegación entre slides
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  // Control del autoplay
  const toggleAutoplay = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (autoplay) {
      if (isPlaying) {
        autoplay.stop();
      } else {
        autoplay.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [emblaApi, isPlaying]);

  // Next/Previous controls
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Configurar eventos
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden bg-white" role="region" aria-label="Carrusel de servicios">
      {/* Contenedor principal del carrusel */}
      <div className="overflow-hidden max-h-[700px]" ref={emblaRef}>
        <div className="flex">
          {sections.map((item, index) => (
            <div
              className="relative flex-[0_0_100%] min-w-0"
              key={`slide-${index}`}
              aria-hidden={selectedIndex !== index}
              aria-label={`Slide ${index + 1} de ${sections.length}`}
            >
              {/* Fondo con imagen y gradiente */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-black/10 via-black/40 to-transparent z-10" />
                <div className="relative w-full h-full">
                  <Image
                    src={item.background}
                    alt={item.alt}
                    title={item.title}
                    fill
                    className="object-center object-fill"
                    priority={index === 0}
                    sizes="100vw"
                    quality={75}
                  />
                </div>
              </div>

              {/* Contenido del slide */}
              <div className="relative z-20 mx-auto max-w-scv18 w-full lg:min-h-[650px] min-h-[340px] flex items-center px-4 lg:px-30">
                <div className="max-w-2xl space-y-4 lg:space-y-6 text-white">
                  {/* Título principal */}
                  <h1
                    className="text-3xl lg:text-5xl font-bold leading-tight drop-shadow-lg"
                    style={{
                      textShadow:
                        "2px 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {item.phrase}
                  </h1>

                  {/* Descripción con animación */}
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        key={`desc-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl"
                      >
                        <p
                          className="text-base lg:text-xl opacity-90 drop-shadow-lg"
                          style={{
                            textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                          }}
                        >
                          {item.smallPhrase}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Botón CTA */}
                  {item.button && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="pt-4"
                    >
                      <Link href="/ReservarCita" className="inline-block">
                        <button
                          className="bg-[#c72a79] hover:bg-[#be0f67] text-white font-semibold px-6 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                          aria-label="Reservar cita de terapia"
                        >
                          Consultar cita
                        </button>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegación - Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div
          className="flex space-x-3"
          role="tablist"
          aria-label="Navegación del carrusel"
        >
          {sections.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => scrollTo(index)}
              aria-label={`Ir al slide ${index + 1}`}
              aria-selected={selectedIndex === index}
              role="tab"
              className={`
                w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent
                ${selectedIndex === index 
                  ? "bg-[#c72a79] scale-110" 
                  : "bg-white/50 hover:bg-white/80"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Controles de navegación - Flechas */}
      <div className="hidden lg:block">
        <button
          onClick={scrollPrev}
          aria-label="Slide anterior"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Slide siguiente"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Control de autoplay */}
      <button
        onClick={toggleAutoplay}
        aria-label={isPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
        className="absolute top-4 right-4 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
      >
        {isPlaying ? (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
}