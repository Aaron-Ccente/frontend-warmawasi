"use client";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaCar, 
  FaBus,
  FaSubway,
  FaWheelchair,
  FaParking,
  FaWifi,
  FaTree,
  FaUtensils,
  FaHospital
} from "react-icons/fa";
import { MdLocationOn, MdAccessTime } from "react-icons/md";

function LocationPage() {
  const locations = [
    {
      name: "Sede Principal - Miraflores",
      address: "Av. Principal 123, Miraflores",
      city: "Lima, Perú",
      phone: "+51 1 234 5678",
      hours: "Lunes a Domingo: 8:00 AM - 8:00 PM",
      features: ["Estacionamiento", "Acceso para silla de ruedas", "Jardines", "WiFi"],
      coordinates: { lat: -12.122, lng: -77.028 }
    },
    {
      name: "Sede Norte - Los Olivos",
      address: "Calle Los Geranios 456",
      city: "Los Olivos, Lima",
      phone: "+51 1 345 6789",
      hours: "Lunes a Domingo: 7:00 AM - 7:00 PM",
      features: ["Estacionamiento", "Área de recreación", "Cafetería", "Farmacia"],
      coordinates: { lat: -11.987, lng: -77.062 }
    },
    {
      name: "Sede Sur - Chorrillos",
      address: "Jr. Las Palmeras 789",
      city: "Chorrillos, Lima",
      phone: "+51 1 456 7890",
      hours: "Lunes a Sábado: 8:00 AM - 6:00 PM",
      features: ["Vista al mar", "Terrazas", "Área de terapia", "Transporte"],
      coordinates: { lat: -12.173, lng: -77.023 }
    }
  ];

  const transportOptions = [
    {
      icon: <FaCar className="text-2xl" />,
      title: "En Auto",
      description: "Amplio estacionamiento gratuito disponible",
      details: ["Estacionamiento para visitantes", "Acceso fácil desde principales avenidas"]
    },
    {
      icon: <FaBus className="text-2xl" />,
      title: "Transporte Público",
      description: "Varias rutas de buses pasan cerca",
      details: ["Corredores Azul y Rojo", "Paradero a 100 metros"]
    },
    {
      icon: <FaSubway className="text-2xl" />,
      title: "Metro",
      description: "Estación a 15 minutos caminando",
      details: ["Estación Miraflores", "Estación Benavides"]
    }
  ];

  const facilityFeatures = [
    { icon: <FaWheelchair />, label: "Acceso Universal", description: "Rampas y ascensores" },
    { icon: <FaParking />, label: "Estacionamiento", description: "Gratuito para visitas" },
    { icon: <FaWifi />, label: "WiFi Gratis", description: "En todas las áreas comunes" },
    { icon: <FaTree />, label: "Jardines", description: "Áreas verdes y terrazas" },
    { icon: <FaUtensils />, label: "Cafetería", description: "Alimentación saludable" },
    { icon: <FaHospital />, label: "Área Médica", description: "Equipo completo 24/7" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-[#fdf2f8]">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#c72a79] to-[#9f2161] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Donde Estamos
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 leading-relaxed">
              Encuentre nuestras sedes y descubra cómo llegar fácilmente
            </p>
          </motion.div>
        </div>
        
        {/* Onda decorativa */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  opacity=".25" fill="white" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                  opacity=".5" fill="white" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                  fill="white" />
          </svg>
        </div>
      </section>

      {/* Map Section */}
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
              Nuestras Ubicaciones
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tres sedes estratégicamente ubicadas para su comodidad
            </p>
          </motion.div>

          {/* Map Container */}
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
                        <span className="text-sm font-semibold text-[#c72a79]">Miraflores</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-linear-to-br from-[#c72a79] to-[#9f2161] rounded-full flex items-center justify-center text-white animate-pulse">
                        <MdLocationOn className="text-xl" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                        <span className="text-sm font-semibold text-[#c72a79]">Los Olivos</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-3/4 left-3/4">
                    <div className="relative">
                      <div className="w-8 h-8 bg-linear-to-br from-[#c72a79] to-[#9f2161] rounded-full flex items-center justify-center text-white animate-pulse">
                        <MdLocationOn className="text-xl" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                        <span className="text-sm font-semibold text-[#c72a79]">Chorrillos</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-20">
                  <p className="text-gray-700 font-semibold mb-2">Mapa Interactivo de Nuestras Sedes</p>
                  <p className="text-gray-600 text-sm">Haga clic en los marcadores para más información</p>
                </div>
              </div>
            </div>
            
            {/* Leyenda del mapa */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-linear-to-br from-[#c72a79] to-[#9f2161] rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Sede Warma Wasi</span>
              </div>
            </div>
          </motion.div>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-linear-to-br from-[#c72a79] to-[#9f2161] p-3 rounded-lg text-white">
                      <FaMapMarkerAlt className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{location.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-medium px-2 py-1 bg-[#c72a79]/10 text-[#c72a79] rounded-full">
                          {index === 0 ? "Principal" : "Sucursal"}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MdLocationOn className="text-[#c72a79] mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">{location.address}</p>
                        <p className="text-gray-600">{location.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <FaPhoneAlt className="text-[#c72a79] mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">{location.phone}</p>
                        <p className="text-gray-600">Teléfono directo</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MdAccessTime className="text-[#c72a79] mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Horario de atención</p>
                        <p className="text-gray-600">{location.hours}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-700 mb-3">Instalaciones:</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href={`https://maps.google.com/?q=${location.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-linear-to-r from-[#c72a79] to-[#9f2161] text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Section */}
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
                    <h3 className="text-xl font-bold text-gray-800">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {option.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
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
                <h3 className="text-2xl font-bold mb-4">¿Necesita indicaciones precisas?</h3>
                <p className="mb-6 opacity-90">
                  Descargue nuestro PDF con rutas detalladas, puntos de referencia y códigos QR para navegación GPS
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

      {/* Facilities Section */}
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
              Instalaciones y Comodidades
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Todas nuestras sedes cuentan con instalaciones diseñadas para su comodidad
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

          {/* Virtual Tour */}
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
                  Explore nuestras instalaciones desde la comodidad de su hogar con nuestro tour virtual interactivo
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
        </div>
      </section>

      {/* CTA Section */}
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
              Agende una visita sin compromiso para conocer nuestras instalaciones y conversar con nuestro equipo
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
    </div>
  );
}

export default LocationPage;