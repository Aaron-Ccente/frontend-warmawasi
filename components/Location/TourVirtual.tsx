"use client";
import { motion } from "framer-motion";

export default function TourVirtual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Recorrido Virtual 360°</h3>
          <p className="mb-6 opacity-90">
            Explore nuestras instalaciones desde la comodidad de su hogar con
            nuestro tour virtual interactivo
          </p>
          <button className="bg-linear-to-r from-[#c72a79] to-[#9f2161] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Iniciar Recorrido Virtual
          </button>
        </div>
        <div className="relative h-48 rounded-xl overflow-hidden bg-linear-to-br from-gray-700 to-gray-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">🎥</span>
              </div>
              <p className="font-semibold">Vista Previa 360°</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
