"use client";
import {motion} from 'framer-motion'

export default function Team() {
    const team = [
    {
      name: "Dra. María Torres",
      role: "Directora Médica",
      experience: "15 años en geriatría"
    },
    {
      name: "Lic. Carlos Mendoza",
      role: "Coordinador de Cuidados",
      experience: "Especialista en cuidados paliativos"
    },
    {
      name: "Psic. Laura Sánchez",
      role: "Psicóloga Geriátrica",
      experience: "Terapia cognitiva y emocional"
    },
    {
      name: "Nut. Roberto Díaz",
      role: "Nutricionista",
      experience: "Alimentación especializada para adultos mayores"
    }
  ];

  return (
    <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#9f2161] mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Profesionales dedicados y capacitados para el mejor cuidado
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-linear-to-br from-[#c72a79] to-[#9f2161] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-center text-[#c72a79] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-center text-gray-600 text-sm">
                    {member.experience}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
