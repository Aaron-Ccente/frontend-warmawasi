import UbicacionContacto from "@/components/home/LocationAndContact";
import Services from "@/components/home/Services";
import Testimonios from "@/components/home/Testimonios";
import Carrusel from "@/components/ui/Carrusel";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans">
      {/* Carrusel de imagenes */}
      <Carrusel/>
      {/* Servicioss */}
      <Services/>
      {/* Testimonios */}
      <Testimonios/>
      {/* Location and Contact */}
      <UbicacionContacto/>
    </div>
  );
}
