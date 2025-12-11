"use client";
import {motion} from 'framer-motion'
import { FaAward, FaHandsHelping, FaHeart, FaUsers } from 'react-icons/fa';

export default function Valores() {
    const values = [
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Compromiso",
      description: "Nos dedicamos con pasión a cada uno de nuestros residentes, brindando cuidado y atención personalizada."
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Familia",
      description: "Creemos en crear un ambiente familiar donde cada persona se sienta valorada y parte de nuestra comunidad."
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Respeto",
      description: "Honramos la dignidad, autonomía e historia de vida de cada adulto mayor bajo nuestro cuidado."
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Excelencia",
      description: "Mantenemos los más altos estándares de calidad en todos nuestros servicios y atención profesional."
    }
  ];

  return (
    <section className="py-16 bg-linear-to-b from-white to-[#fff5f9]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#9f2161] mb-4">
              Nuestros Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Principios que guían cada acción y decisión en Warma Wasi
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-linear-to-br from-[#c72a79] to-[#9f2161] p-4 rounded-full text-white mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
