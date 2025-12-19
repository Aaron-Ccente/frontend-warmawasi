"use client";

import Link from "next/link";
import type { Nav } from "@/interface/Nav/NavDesktop";
import Image from "next/image";

const navItems: Nav[] = [
  { name: "Home", ref: "" },
  { name: "Sobre Nosotros", ref: "sobre-nosotros" },
  { name: "Servicios", ref: "servicios" },
  { name: "Ubícanos", ref: "donde-estamos" },
  { name: "Consultar cita", ref: "consultar-cita" },
  { name: "Iniciar Sesión", ref: "login" },
];


function NavDesktop() {
  return (
    <nav
      className="fixed top-0 left-0 w-full shadow-md z-50 bg-white/90 flex justify-between px-30"
    >
      <Image height={60} width={200} src={'/LogoApp/logoPrincipalHome.webp'} alt="logo de Warma Wasi" className="max-h-[60px]" quality={75}/>
      <ul className="flex gap-6 justify-center items-center text-[#c72a79] font-medium text-sm">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.ref}`} className={`hover:opacity-70 px-2 py-2 rounded-lg transition 
              ${item.name === "Consultar cita" ? "bg-[#c72a79] text-white ": ""}
              ${item.name === "Iniciar Sesión" ? "border border-[#c72a79] ": ""}
              `}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavDesktop;
