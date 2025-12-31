"use client";
import { motion } from "framer-motion";
import {
  FaWheelchair,
  FaParking,
  FaWifi,
  FaTree,
  FaUtensils,
  FaHospital,
} from "react-icons/fa";

export default function Facilidades() {
  const facilityFeatures = [
    {
      icon: <FaWheelchair />,
      label: "Acceso Universal",
      description: "Rampas y ascensores",
    },
    {
      icon: <FaParking />,
      label: "Estacionamiento",
      description: "Gratuito para visitas",
    },
    {
      icon: <FaWifi />,
      label: "WiFi Gratis",
      description: "En todas las áreas comunes",
    },
    {
      icon: <FaTree />,
      label: "Jardines",
      description: "Áreas verdes y terrazas",
    },
    {
      icon: <FaUtensils />,
      label: "Cafetería",
      description: "Alimentación saludable",
    },
    {
      icon: <FaHospital />,
      label: "Área Médica",
      description: "Equipo completo 24/7",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#9f2161] mb-4">
          Instalaciones y Comodidades
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Todas nuestras sedes cuentan con instalaciones diseñadas para su
          comodidad
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {facilityFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-linear-to-br from-[#c72a79] to-[#9f2161] p-3 rounded-lg text-white">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{feature.label}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
