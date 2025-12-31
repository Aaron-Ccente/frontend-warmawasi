"use client";
import { motion } from "framer-motion";
import { MdLocationOn } from "react-icons/md";

export default function Mapa() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl mb-16 border border-gray-200"
    >
      {/* Mapa interactivo placeholder */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-full h-full">
            {/* Marcadores en el mapa */}
            <div className="absolute top-1/4 left-1/4">
              <div className="relative">
                <div className="w-8 h-8 bg-linear-to-br from-[#c72a79] to-[#9f2161] rounded-full flex items-center justify-center text-white animate-pulse">
                  <MdLocationOn className="text-xl" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                  <span className="text-sm font-semibold text-[#c72a79]">
                    Miraflores
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2">
              <div className="relative">
                <div className="w-8 h-8 bg-linear-to-br from-[#c72a79] to-[#9f2161] rounded-full flex items-center justify-center text-white animate-pulse">
                  <MdLocationOn className="text-xl" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                  <span className="text-sm font-semibold text-[#c72a79]">
                    Los Olivos
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-3/4 left-3/4">
              <div className="relative">
                <div className="w-8 h-8 bg-linear-to-br from-[#c72a79] to-[#9f2161] rounded-full flex items-center justify-center text-white animate-pulse">
                  <MdLocationOn className="text-xl" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                  <span className="text-sm font-semibold text-[#c72a79]">
                    Chorrillos
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <p className="text-gray-700 font-semibold mb-2">
              Mapa Interactivo de Nuestras Sedes
            </p>
            <p className="text-gray-600 text-sm">
              Haga clic en los marcadores para más información
            </p>
          </div>
        </div>
      </div>

      {/* Leyenda del mapa */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-linear-to-br from-[#c72a79] to-[#9f2161] rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">
            Sede Warma Wasi
          </span>
        </div>
      </div>
    </motion.div>
  );
}
