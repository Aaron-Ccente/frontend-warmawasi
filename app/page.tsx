import Services from "@/components/home/Services";
import Carrusel from "@/components/ui/Carrusel";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans">
      {/* Carrusel de imagenes */}
      <Carrusel/>
      {/* Servicioss */}
      <Services/>
    </div>
  );
}
