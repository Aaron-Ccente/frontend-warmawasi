"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function FooterMain() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-[#c72a79] to-[#9f2161] text-white pt-12 font-sans relative">
      {/* Contenido principal con padding */}
      <div className="max-w-6xl mx-auto md:px-8 px-6 lg:px-12 pb-8">
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          {/* Columna 1 - Logo y descripción */}
          <motion.div
            className="min-w-[180px] flex-1 basis-[200px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 id="footer-heading" className="text-2xl font-bold mb-3">
              Warma Wasi
            </h3>
            <p className="text-gray-100 mb-5 leading-relaxed text-sm md:text-base">
              Atención profesional y cercana. Reserva tus servicios y
              contáctanos para más información.
            </p>

            <div className="flex gap-3 mt-4">
              <motion.a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center w-10 h-10 bg-white/10 text-white rounded-lg border border-white/15 transition-all duration-200 hover:bg-[#d13c86] hover:shadow-lg hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebookF size={18} />
              </motion.a>
              <motion.a
                href="#"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 bg-white/10 text-white rounded-lg border border-white/15 transition-all duration-200 hover:bg-[#d13c86] hover:shadow-lg hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-10 h-10 bg-white/10 text-white rounded-lg border border-white/15 transition-all duration-200 hover:bg-[#d13c86] hover:shadow-lg hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Columna 2 - Enlaces */}
          <motion.div
            className="min-w-[180px] flex-1 basis-[200px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-lg">Enlaces</h4>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              <FooterLink href="/">Inicio</FooterLink>
              <FooterLink href="/servicios">Servicios</FooterLink>
              <FooterLink href="/donde-estamos">Dónde estamos</FooterLink>
              <FooterLink href="/sobre-nosotros">Sobre nosotros</FooterLink>
            </nav>
          </motion.div>

          {/* Columna 3 - Cuenta */}
          <motion.div
            className="min-w-[180px] flex-1 basis-[200px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h4 className="font-bold mb-4 text-lg">Cuenta</h4>
            <nav aria-label="Account links" className="flex flex-col gap-2">
              <FooterLink href="/login">Iniciar sesión</FooterLink>
              <FooterLink href="#">Política de privacidad</FooterLink>
              <FooterLink href="#">Términos y condiciones</FooterLink>
            </nav>
          </motion.div>

          {/* Columna 4 - Contacto */}
          <motion.div
            className="min-w-[180px] flex-1 basis-[200px] max-w-[260px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-lg">Contacto</h4>
            <address className="not-italic">
              <p className="text-gray-100 mb-2">Av. Ejemplo 123</p>
              <p className="text-gray-100 mb-2">Ciudad, País</p>
              <div className="text-gray-100 mb-2 flex items-center">
                <FaEnvelope className="mr-2" />
                <FooterLink href="mailto:info@warmawasi.example" inline>
                  info@warmawasi.example
                </FooterLink>
              </div>
              <div className="text-gray-100 mb-4 flex items-center">
                <FaPhone className="mr-2" />
                <FooterLink href="tel:+1234567890" inline>
                  +1 234 567 890
                </FooterLink>
              </div>
            </address>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-[#d13c86] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:bg-white hover:text-[#c72a79] hover:shadow-lg transition-all duration-200"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Volver arriba"
            >
              <FaArrowUp />
              Subir
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Sección de copyright - ocupa todo el ancho */}
      <motion.div
        className="w-full bg-[#d13c86] py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="text-center">
          <small className="text-sm font-medium">
            © {year} Warma Wasi. Todos los derechos reservados.
          </small>
        </div>
      </motion.div>
    </footer>
  );
}

// Componente para los enlaces del footer
function FooterLink({
  href,
  children,
  inline = false,
}: {
  href: string;
  children: React.ReactNode;
  inline?: boolean;
}) {
  const baseClasses =
    "text-gray-100 hover:text-white transition-all duration-200 relative group";
  const blockClasses = "block py-1 pl-3";
  const inlineClasses = "inline-block pl-3";

  const content = (
    <>
      {children}
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#d13c86] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </>
  );

  if (href.startsWith("/")) {
    return (
      <motion.div
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          href={href}
          className={`${baseClasses} ${inline ? inlineClasses : blockClasses}`}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <a
        href={href}
        className={`${baseClasses} ${inline ? inlineClasses : blockClasses}`}
      >
        {content}
      </a>
    </motion.div>
  );
}