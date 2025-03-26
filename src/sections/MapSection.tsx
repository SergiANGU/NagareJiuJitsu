import { MapLocation } from "@/components/MapLocation";

export function MapSection() {
    return (
        <section id="mapa" className="px-4 sm:px-8 pb-20 bg-[#F0EDE7] text-[#2C2C2C]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">¿Dónde estamos?</h3>

          <MapLocation
            title="Sants"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.8125158777016!2d2.1311936764394073!3d41.37815789656695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49909ef4c476b%3A0x33696835c44f30b8!2sNagare%20Jiu%20Jitsu!5e0!3m2!1ses!2ses!4v1742973229093!5m2!1ses!2ses"
          />

          <MapLocation
            title="Horta - Guinardó"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.125840521558!2d2.1599094764408533!3d41.4147868942946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2b66055f1e7%3A0x162ac8a0ab88e74e!2sGimn%C3%A0s%20Montserrat!5e0!3m2!1ses!2ses!4v1742973456614!5m2!1ses!2ses"
          />
        </div>
      </section>
    );
  }