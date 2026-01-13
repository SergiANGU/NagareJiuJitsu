import { Button } from "@/components/ui/button";
import { Phone, Instagram, Mail, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string().min(1, "Nombre requerido"),
    email: z.string().email("Email inválido"),
    message: z.string().min(5, "Mensaje muy corto"),
  });
  
  type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });
    
      const onSubmit = (data: ContactForm) => {
        alert("Mensaje enviado: " + JSON.stringify(data, null, 2));
      };


    return (
        <section id="contact" style={{ backgroundColor: "#FAF9F6", color: "#4B4B4B" }} className="py-20 px-4 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Contacto</h3>
          <p className="mb-6">¿Tienes dudas? Escribinos o llamanos:</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name")}
              placeholder="Nombre"
              className="w-full border p-3 rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
              {...register("email")}
              placeholder="Email"
              className="w-full border p-3 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <textarea
              {...register("message")}
              placeholder="Mensaje"
              rows={4}
              className="w-full border p-3 rounded-md"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

            <Button className="bg-[#FFA552] text-[#1F1F1F] hover:bg-[#FF8C42]" type="submit">Enviar mensaje</Button>
          </form>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="https://wa.me/34650270270"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#4B4B4B] hover:text-[#FFA552] transition-colors"
            >
              <MessageCircle size={18} className="text-[#25D366]" /> WhatsApp: 650 270 270
            </a>
            <a
              href="tel:+34650270270"
              className="inline-flex items-center gap-2 text-sm text-[#4B4B4B] hover:text-[#FFA552] transition-colors"
            >
              <Phone size={18} /> Llamar: 650 270 270
            </a>
            <a
              href="https://www.instagram.com/nagarejiujitsu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#4B4B4B] hover:text-[#FFA552] transition-colors"
            >
              <Instagram size={18} /> Seguinos en Instagram
            </a>
            <a
              href="mailto:info@nagarejiujitsu.com"
              className="inline-flex items-center gap-2 text-sm text-[#4B4B4B] hover:text-[#FFA552] transition-colors"
            >
              <Mail size={18} /> Escribinos por Mail
            </a>
          </div>
        </div>
      </section>
    );
  }