"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-linear-to-br from-[#c72a79]/10 to-[#9f2161]/10 rounded-2xl p-8 border border-[#c72a79]/20"
        >
          <h2 className="text-3xl font-bold text-[#9f2161] mb-4">
            ¿Listo para Visitarnos?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Agende una visita sin compromiso para conocer nuestras instalaciones
            y conversar con nuestro equipo
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-linear-to-br from-[#c72a79] to-[#9f2161] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Solicitar Visita Guiada
            </a>
            <a
              href="tel:+5112345678"
              className="bg-white text-[#c72a79] border-2 border-[#c72a79] px-8 py-3 rounded-lg font-semibold hover:bg-[#c72a79] hover:text-white transition-all duration-300"
            >
              <FaPhoneAlt className="inline mr-2" />
              Llamar para Direcciones
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
