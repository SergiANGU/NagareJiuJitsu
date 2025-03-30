import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string().min(1, "Nombre requerido"),
    email: z.string().email("Email inválido"),
    message: z.string().min(5, "Mensaje muy corto"),
  });
  
  type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {

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
          <p className="mb-6">¿Querés sumarte o tenés dudas? Escribinos o llamanos:</p>

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

          <div className="mt-6 flex flex-col gap-4">
            <Button variant="outline"  className="bg-[#FFA552] text-[#1F1F1F] hover:bg-[#FF8C42]">
              <Phone size={20} /> Llamar al 123 456 789
            </Button>
            <a
              href="https://www.instagram.com/nagarejiujitsu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
            >
              <Instagram size={18} /> Seguinos en Instagram
            </a>
          </div>
        </div>
      </section>
    );
  }