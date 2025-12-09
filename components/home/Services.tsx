import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const services = [
    { title: "servicio1", icon: "/icons/svg/ImgsServicios/TeenTherapy.svg", name: "Icono", link: "" },
    { title: "servicio1", icon: "/icons/svg/ImgsServicios/familyTherapy.svg", name: "Icono", link: "" },
    { title: "servicio1", icon: "/icons/svg/ImgsServicios/coupleTherapy.svg", name: "Icono", link: "" },
    { title: "servicio1", icon: "/icons/svg/ImgsServicios/businessTherapy.svg", name: "Icono", link: "" },
    { title: "servicio1", icon: "/icons/svg/ImgsServicios/adultTherapy.svg", name: "Icono", link: "" },
    { title: "servicio1", icon: "/icons/svg/ImgsServicios/childTherapy.svg", name: "Icono", link: "" },
  ];

  return (
    <section className="flex justify-center py-12 px-4 bg-gray-100">
      <div className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <div className="hidden lg:flex justify-center">
          <Image
            src="/HomeSection/terapeutaCartoonP03.webp"
            width={600}
            height={600}
            alt="Terapeuta Warma Wasi cartoon"
            quality={75}
            // className="w-full max-w-[480px] xl:max-w-[600px] h-auto object-contain drop-shadow-[0px_12px_30px_#c72a79]"
            className="w-full max-w-[480px] xl:max-w-[600px] h-auto object-contain drop-shadow-[0px_12px_30px_#fcc]"
          />
        </div>

        <div className="flex flex-col gap-4 py-6">
        <h2 className="text-center font-bold text-3xl md:text-4xl text-[#c72a79]">Servicios de Warma Wasi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-5 place-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-[#c72a79] border border-[#c72a79] rounded-2xl p-4 w-full max-w-[300px] h-[130px] flex items-center justify-between overflow-hidden text-white hover:bg-[#bd2571] shadow-md cursor-pointer"
            >
              <div className="absolute bottom-0 left-0 bg-[#d13c86] w-10 h-10 rounded-tr-full"></div>
              <div className="absolute top-0 right-0 bg-[#d13c86] w-14 h-14 rounded-bl-full"></div>

              <div className="z-10 bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <Image
                  src={service.icon}
                  width={48}
                  height={48}
                  alt={service.name}
                  className="w-10 h-10 object-contain brightness-0 invert"
                />
              </div>
              <h2 className="z-10 text-base font-medium">{service.title}</h2>
              <button className="z-10 flex bg-[#e27eb0] px-2 py-1 items-center gap-1 rounded-lg text-xs shadow hover:scale-105 cursor-pointer">
                Ver más
                <ArrowRight strokeWidth={2.5} className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
       </div>

      </div>
    </section>
  );
}
