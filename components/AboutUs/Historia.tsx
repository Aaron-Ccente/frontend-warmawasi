"use client";

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaStar } from 'react-icons/fa'
export default function Historia() {
  return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#9f2161] mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Fundada en 2010, <span className="font-semibold text-[#c72a79]">Warma Wasi</span> nació del deseo de crear un hogar donde los adultos mayores recibieran el cuidado, respeto y amor que merecen en su tercera edad.
                </p>
                <p className="text-lg">
                  Lo que comenzó como una pequeña residencia familiar, hoy es un centro de referencia en cuidado geriátrico, combinando experiencia médica con un enfoque humano y cálido.
                </p>
                <p className="text-lg">
                  Nuestro nombre en quechua significa <span className="italic">Casa Cálida</span>, y eso es exactamente lo que creamos cada día: un espacio seguro, acogedor y lleno de vida.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-linear-to-br from-[#c72a79]/10 to-[#9f2161]/10 rounded-2xl p-8 shadow-xl border border-[#c72a79]/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-linear-to-br from-[#c72a79] to-[#9f2161] p-3 rounded-xl text-white">
                    <FaCalendarAlt size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#9f2161]">12+ Años</h3>
                    <p className="text-gray-600">De experiencia en cuidado geriátrico</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaStar className="text-[#c72a79]" />
                    <span className="text-gray-700">Más de 500 familias confían en nosotros</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaStar className="text-[#c72a79]" />
                    <span className="text-gray-700">Equipo multidisciplinario certificado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaStar className="text-[#c72a79]" />
                    <span className="text-gray-700">Instalaciones diseñadas para su comodidad</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
