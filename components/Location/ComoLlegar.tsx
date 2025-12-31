"use client";
import { motion } from "framer-motion";
import { FaCar, FaBus, FaSubway } from "react-icons/fa";

export default function ComoLlegar() {
  const transportOptions = [
    {
      icon: <FaCar className="text-2xl" />,
      title: "En Auto",
      description: "Amplio estacionamiento gratuito disponible",
      details: [
        "Estacionamiento para visitantes",
        "Acceso fácil desde principales avenidas",
      ],
    },
    {
      icon: <FaBus className="text-2xl" />,
      title: "Transporte Público",
      description: "Varias rutas de buses pasan cerca",
      details: ["Corredores Azul y Rojo", "Paradero a 100 metros"],
    },
    {
      icon: <FaSubway className="text-2xl" />,
      title: "Metro",
      description: "Estación a 15 minutos caminando",
      details: ["Estación Miraflores", "Estación Benavides"],
    },
  ];

  return (
    <section className="py-16 bg-linear-to-br from-[#c72a79]/5 to-[#9f2161]/5">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#9f2161] mb-4">
            Cómo Llegar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Múltiples opciones de transporte para su comodidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {transportOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-linear-to-br from-[#c72a79] to-[#9f2161] p-3 rounded-lg text-white">
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {option.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-[#c72a79] rounded-full"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Directions Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-[#c72a79] to-[#9f2161] rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                ¿Necesita indicaciones precisas?
              </h3>
              <p className="mb-6 opacity-90">
                Descargue nuestro PDF con rutas detalladas, puntos de referencia
                y códigos QR para navegación GPS
              </p>
              <button className="bg-white text-[#c72a79] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Descargar Guía de Rutas (PDF)
              </button>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-bold mb-3 text-lg">Consejos útiles:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Verifique el tráfico antes de salir</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Programe su visita fuera de horas pico</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Use Waze o Google Maps para rutas en tiempo real</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
