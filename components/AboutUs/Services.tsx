"use client"
import { FaCheckCircle } from 'react-icons/fa'
import { services } from '../home/Services'

import {motion} from 'framer-motion'
import Link from 'next/link'
export default function Services() {
  return (
    <section className="py-16 bg-linear-to-br from-[#c72a79]/5 to-[#9f2161]/5">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#9f2161] mb-6">
                Nuestros Servicios
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Ofrecemos una atención integral diseñada específicamente para las necesidades de niños con habilidades diferentes:
              </p>
              
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-linear-to-br from-[#c72a79] to-[#9f2161] p-1 rounded-full">
                      <FaCheckCircle className="text-white" />
                    </div>
                    <span className="text-gray-700">{service.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-linear-to-br from-[#c72a79] to-[#9f2161] rounded-2xl p-8 text-white shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Visítenos</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-lg mb-2">
                    Estamos aquí para atender a su hijo(a) con el mayor cuidado y profesionalismo.
                  </p>
                  <p className="text-gray-100">
                    Agende una visita para conocer nuestras instalaciones y hablar con nuestro equipo.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-white/20">
                  <Link 
                    href="/contacto"
                    className="inline-flex items-center gap-2 bg-white text-[#c72a79] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                  >
                    Contactar Ahora
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
