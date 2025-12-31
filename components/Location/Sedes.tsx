import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdAccessTime } from "react-icons/md";

export default function Sedes() {
  const locations = [
    {
      name: "Sede Principal - Miraflores",
      address: "Av. Principal 123, Miraflores",
      city: "Lima, Perú",
      phone: "+51 1 234 5678",
      hours: "Lunes a Domingo: 8:00 AM - 8:00 PM",
      features: [
        "Estacionamiento",
        "Acceso para silla de ruedas",
        "Jardines",
        "WiFi",
      ],
      coordinates: { lat: -12.122, lng: -77.028 },
    },
    {
      name: "Sede Norte - Los Olivos",
      address: "Calle Los Geranios 456",
      city: "Los Olivos, Lima",
      phone: "+51 1 345 6789",
      hours: "Lunes a Domingo: 7:00 AM - 7:00 PM",
      features: [
        "Estacionamiento",
        "Área de recreación",
        "Cafetería",
        "Farmacia",
      ],
      coordinates: { lat: -11.987, lng: -77.062 },
    },
    {
      name: "Sede Sur - Chorrillos",
      address: "Jr. Las Palmeras 789",
      city: "Chorrillos, Lima",
      phone: "+51 1 456 7890",
      hours: "Lunes a Sábado: 8:00 AM - 6:00 PM",
      features: ["Vista al mar", "Terrazas", "Área de terapia", "Transporte"],
      coordinates: { lat: -12.173, lng: -77.023 },
    },
  ];
  return (
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
                <h3 className="text-xl font-bold text-gray-800">
                  {location.name}
                </h3>
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
                  <p className="font-medium text-gray-800">
                    {location.address}
                  </p>
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
                  <p className="font-medium text-gray-800">
                    Horario de atención
                  </p>
                  <p className="text-gray-600">{location.hours}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-700 mb-3">
                  Instalaciones:
                </h4>
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
  );
}
