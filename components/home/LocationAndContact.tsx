"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const PRIMARY = "#c72a79";
const ACCENT = "#d13c86";
const LIGHT = "#e27eb0";

export default function UbicacionContacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });

    // Simulación de envío
    setTimeout(() => {
      setFormStatus({ loading: false, success: true, error: false });
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      
      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Dirección",
      content: "Av. Principal 123, Lima 15001, Perú",
      subtitle: "Distrito de San Isidro",
      action: "Ver en Google Maps",
      link: "https://maps.google.com/?q=Av.+Principal+123,+Lima",
      color: "bg-blue-500",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Teléfono",
      content: "(01) 234-5678",
      subtitle: "Lunes a Viernes: 9am - 6pm",
      action: "Llamar ahora",
      link: "tel:+5112345678",
      color: "bg-green-500",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      content: "contacto@warmawasi.com",
      subtitle: "Respondemos en 24 horas",
      action: "Enviar email",
      link: "mailto:contacto@warmawasi.com",
      color: "bg-red-500",
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Horario de Atención",
      content: "Lunes a Viernes: 9am - 7pm",
      subtitle: "Sábados: 9am - 1pm",
      action: "Agendar cita",
      link: "#formulario",
      color: "bg-purple-500",
    },
  ];

  const socialMedia = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      name: "WhatsApp",
      link: "https://wa.me/51912345678",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      name: "Facebook",
      link: "https://facebook.com/warmawasi",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      name: "Instagram",
      link: "https://instagram.com/warmawasi",
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-100" id="contacto">
      <div className="max-w-7xl mx-auto ">
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: PRIMARY }}>
            Ubicación y Contacto
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos aquí para acompañarte en tu camino hacia el bienestar emocional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda: Información de contacto y mapa */}
          <div className="space-y-8">
            {/* Tarjetas de información */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${item.color} text-white p-3 rounded-lg`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1" style={{ color: PRIMARY }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-800 font-medium">{item.content}</p>
                      <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm font-medium hover:underline"
                        style={{ color: ACCENT }}
                      >
                        {item.action} →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mapa interactivo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="p-6" style={{ backgroundColor: PRIMARY }}>
                <h3 className="text-xl font-bold text-white mb-4">
                  Nuestra Ubicación
                </h3>
                <p className="text-white/90">
                  Fácil acceso desde cualquier punto de Lima
                </p>
              </div>
              
              {/* Mapa simulado con imagen de placeholder */}
              <div className="relative h-64 md:h-80 bg-linear-to-r from-blue-50 to-purple-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-5xl mx-auto mb-4" style={{ color: PRIMARY }} />
                    <p className="font-bold text-gray-700">Av. Principal 123, Lima</p>
                    <p className="text-gray-500 text-sm">San Isidro, Lima - Perú</p>
                  </div>
                </div>
                
                {/* Puntos de referencia decorativos */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center"
                  style={{ border: `3px solid ${ACCENT}` }}>
                  <FaMapMarkerAlt className="text-sm" style={{ color: PRIMARY }} />
                </div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-white shadow-lg"
                  style={{ border: `2px solid ${LIGHT}` }} />
              </div>
              
              <div className="p-6 bg-gray-50">
                <div className="flex flex-wrap gap-4 justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Transporte público cercano:</p>
                    <p className="font-medium">Metro, buses y taxis</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Av.+Principal+123,+Lima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: PRIMARY }}>
                Síguenos en redes sociales
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 ${social.color} ${social.hoverColor} text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    {social.icon}
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Columna derecha: Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
            id="formulario"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3" style={{ color: PRIMARY }}>
                Contáctanos
              </h3>
              <p className="text-gray-600">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-2 focus:outline-none transition-all duration-300"
                    style={{ 
                      borderColor: formData.nombre ? `${PRIMARY}50` : '#d1d5db'
                    }}
                    placeholder="María García"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-2 focus:outline-none transition-all duration-300"
                    style={{ 
                      borderColor: formData.email ? `${PRIMARY}50` : '#d1d5db'
                    }}
                    placeholder="hola@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-2 focus:outline-none transition-all duration-300"
                  style={{ 
                    borderColor: formData.telefono ? `${PRIMARY}50` : '#d1d5db'

                  }}
                  placeholder="+51 999 999 999"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿En qué podemos ayudarte? *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-2 focus:outline-none transition-all duration-300 resize-none"
                  style={{ 
                    borderColor: formData.mensaje ? `${PRIMARY}50` : '#d1d5db'
                  }}
                  placeholder="Cuéntanos sobre tu situación o consulta..."
                />
              </div>

              {/* Mensajes de estado */}
              {formStatus.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-50 border border-green-200"
                >
                  <p className="text-green-700 font-medium">
                    ✓ Mensaje enviado exitosamente. Te contactaremos pronto.
                  </p>
                </motion.div>
              )}

              {formStatus.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-50 border border-red-200"
                >
                  <p className="text-red-700 font-medium">
                    ✗ Hubo un error al enviar. Por favor, inténtalo nuevamente.
                  </p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={formStatus.loading}
                className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                  formStatus.loading ? 'opacity-80 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'
                }`}
                style={{ 
                  backgroundColor: formStatus.loading ? ACCENT : PRIMARY,
                  backgroundImage: formStatus.loading ? 'none' : `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`
                }}
              >
                {formStatus.loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Al enviar este formulario, aceptas nuestra política de privacidad.
                Tus datos están seguros con nosotros.
              </p>
            </form>

            {/* Información adicional del formulario */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${PRIMARY}15` }}>
                    <svg className="w-6 h-6" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Confidencialidad garantizada</p>
                    <p className="text-sm text-gray-500">Tus datos son 100% privados</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${PRIMARY}15` }}>
                    <svg className="w-6 h-6" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Respuesta rápida</p>
                    <p className="text-sm text-gray-500">Te contactamos en 24h máximo</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Llamada a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-3xl p-12 max-w-4xl mx-auto"
            style={{ border: `2px solid ${PRIMARY}20` }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: PRIMARY }}>
              ¿Necesitas ayuda inmediata?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              No esperes más para comenzar tu camino hacia el bienestar emocional
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+5112345678"
                className="px-8 py-4 rounded-full font-bold text-white flex items-center gap-3 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: PRIMARY }}
              >
                <FaPhone />
                Llamar ahora: (01) 234-5678
              </a>
              <a
                href="https://wa.me/51912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold text-white flex items-center gap-3 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#25D366' }}
              >
                <FaWhatsapp />
                WhatsApp 24/7
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}