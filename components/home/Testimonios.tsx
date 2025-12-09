"use client";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const PRIMARY = "#c72a79";
const ACCENT = "#d13c86";
const LIGHT = "#e27eb0";

export default function Testimonios() {
  const testimonios = [
    {
      text: "La atención fue cálida y profesional. Noté mejoras rápidas en pocas sesiones. El equipo de Warma Wasi realmente entiende las necesidades de cada persona.",
      name: "María López",
      role: "Paciente",
      initials: "ML",
    },
    {
      text: "Excelente acompañamiento familiar, las herramientas que nos dieron funcionan en el día a día. Nos enseñaron a comunicarnos mejor como familia.",
      name: "Familia Ramos",
      role: "Familia",
      initials: "FR",
    },
    {
      text: "Profesionales muy empáticos y con enfoque práctico. Recomendado 100%. Las sesiones fueron transformadoras para mi bienestar emocional.",
      name: "Carlos Pérez",
      role: "Adulto",
      initials: "CP",
    },
    {
      text: "Como adolescente, me sentí escuchado y comprendido por primera vez. Las técnicas que aprendí me ayudan a manejar la ansiedad escolar.",
      name: "Ana Rodríguez",
      role: "Adolescente",
      initials: "AR",
    },
    {
      text: "El apoyo durante el duelo fue fundamental para nuestra recuperación. Un espacio seguro donde pudimos expresar nuestras emociones libremente.",
      name: "Familia Gutiérrez",
      role: "Familia",
      initials: "FG",
    },
    {
      text: "La terapia online fue tan efectiva como la presencial. Flexibilidad horaria y misma calidad de atención. Muy recomendable.",
      name: "Roberto Sánchez",
      role: "Profesional",
      initials: "RS",
    },
    {
      text: "Mi hijo mejoró notablemente su concentración y habilidades sociales. Los terapeutas tienen un trato excepcional con los niños.",
      name: "Laura Mendoza",
      role: "Madre",
      initials: "LM",
    },
    {
      text: "Atención integral que considera todos los aspectos de la persona. No solo se enfocan en el problema, sino en el desarrollo personal completo.",
      name: "Diego Castillo",
      role: "Paciente",
      initials: "DC",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextTestimonios = () => {
    if (currentIndex + itemsPerPage < testimonios.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevTestimonios = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const currentTestimonios = testimonios.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-16 px-4 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: PRIMARY }}
          >
            Testimonios Reales
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Experiencias reales de quienes ya confiaron en Warma Wasi
          </motion.p>
          
          {/* Indicador de testimonios */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonios.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(Math.floor(idx / itemsPerPage) * itemsPerPage)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(idx / itemsPerPage) === Math.floor(currentIndex / itemsPerPage)
                    ? "scale-125"
                    : "opacity-50"
                }`}
                style={{
                  backgroundColor: Math.floor(idx / itemsPerPage) === Math.floor(currentIndex / itemsPerPage)
                    ? PRIMARY
                    : LIGHT
                }}
                aria-label={`Ir al grupo de testimonios ${Math.floor(idx / itemsPerPage) + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Botones de navegación */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevTestimonios}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-105 active:scale-95"
              }`}
              style={{
                backgroundColor: currentIndex === 0 ? "#f0f0f0" : PRIMARY,
                color: currentIndex === 0 ? "#999" : "white",
              }}
              aria-label="Testimonios anteriores"
            >
              <FaChevronLeft />
              <span className="hidden sm:inline">Anteriores</span>
            </button>

            <div className="text-center">
              <span className="text-sm font-medium" style={{ color: PRIMARY }}>
                Mostrando {Math.min(currentIndex + 1, testimonios.length)}-
                {Math.min(currentIndex + itemsPerPage, testimonios.length)} de {testimonios.length}
              </span>
            </div>

            <button
              onClick={nextTestimonios}
              disabled={currentIndex + itemsPerPage >= testimonios.length}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentIndex + itemsPerPage >= testimonios.length
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-105 active:scale-95"
              }`}
              style={{
                backgroundColor: currentIndex + itemsPerPage >= testimonios.length ? "#f0f0f0" : PRIMARY,
                color: currentIndex + itemsPerPage >= testimonios.length ? "#999" : "white",
              }}
              aria-label="Siguientes testimonios"
            >
              <span className="hidden sm:inline">Siguientes</span>
              <FaChevronRight />
            </button>
          </div>

          {/* Grid de testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentTestimonios.map((t, i) => (
              <motion.article
                key={currentIndex + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: `0 20px 40px ${ACCENT}15`
                }}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                style={{ border: `1px solid ${ACCENT}20` }}
                aria-label={`Testimonio de ${t.name}`}
              >
                {/* Elemento decorativo superior */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})` }}
                  aria-hidden
                />

                {/* Avatar circular con iniciales */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10"
                  style={{ 
                    background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                    border: `3px solid white`
                  }}
                >
                  {t.initials}
                </div>

                {/* Contenedor del contenido con padding para evitar superposición */}
                <div className="pt-4 pl-8">
                  {/* Icono de comillas */}
                  <div className="mb-4">
                    <FaQuoteLeft 
                      className="text-3xl mb-3 opacity-20" 
                      style={{ color: PRIMARY }} 
                    />
                  </div>

                  {/* Texto del testimonio */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                    {t.text}
                  </p>

                  {/* Información de la persona */}
                  <div className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: `${LIGHT}30` }}
                  >
                    <div>
                      <p className="font-bold text-base" style={{ color: PRIMARY }}>
                        {t.name}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{t.role}</p>
                    </div>

                    {/* Estrellas de calificación */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <FaStar
                            size={16}
                            className="drop-shadow-sm"
                            style={{ color: PRIMARY }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Elemento decorativo de fondo */}
                <div
                  className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: ACCENT,
                  }}
                  aria-hidden
                />
              </motion.article>
            ))}
          </div>

          {/* Indicador responsivo para móviles */}
          <div className="flex items-center justify-center gap-4 mt-8 lg:hidden">
            <button
              onClick={prevTestimonios}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              style={{ color: currentIndex === 0 ? "#ccc" : PRIMARY }}
              aria-label="Testimonios anteriores"
            >
              <FaChevronLeft size={20} />
            </button>
            
            <span className="text-sm font-medium" style={{ color: PRIMARY }}>
              {Math.floor(currentIndex / itemsPerPage) + 1} / {Math.ceil(testimonios.length / itemsPerPage)}
            </span>
            
            <button
              onClick={nextTestimonios}
              disabled={currentIndex + itemsPerPage >= testimonios.length}
              className={`p-3 rounded-full ${
                currentIndex + itemsPerPage >= testimonios.length
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              style={{ color: currentIndex + itemsPerPage >= testimonios.length ? "#ccc" : PRIMARY }}
              aria-label="Siguientes testimonios"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Nota informativa */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 pt-6 border-t"
          style={{ borderColor: `${LIGHT}30` }}
        >
          <p className="text-gray-500 text-sm">
            Más de <span className="font-bold" style={{ color: PRIMARY }}>200 familias</span> han confiado en nuestros servicios
          </p>
        </motion.div>
      </div>
    </section>
  );
}