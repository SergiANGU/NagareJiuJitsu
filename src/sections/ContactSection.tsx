import { Button } from "@/components/ui/button";
import { Phone, Instagram, Mail, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
    const { t } = useTranslation();

    const contactSchema = z.object({
        name: z.string().min(1, t('contact.form.errors.name')),
        email: z.string().email(t('contact.form.errors.email')),
        message: z.string().min(5, t('contact.form.errors.message')),
      });
      
      type ContactForm = z.infer<typeof contactSchema>;

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
        <div className="w-full mx-auto">
          <h3 className="text-3xl font-bold mb-4">{t('contact.title')}</h3>
          <p className="mb-6">{t('contact.subtitle')}</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("name")}
              placeholder={t('contact.form.name')}
              className="w-full border p-3 rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
              {...register("email")}
              placeholder={t('contact.form.email')}
              className="w-full border p-3 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <textarea
              {...register("message")}
              placeholder={t('contact.form.message')}
              rows={4}
              className="w-full border p-3 rounded-md"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

            <Button className="bg-[#FFA552] text-[#1F1F1F] hover:bg-[#FF8C42]" type="submit">{t('contact.form.submit')}</Button>
          </form>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="https://wa.me/34650270270"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#4B4B4B] hover:text-[#FFA552] transition-colors"
            >
              <MessageCircle size={18} className="text-[#25D366]" /> {t('contact.whatsapp')}
            </a>
            <a
              href="tel:+34650270270"
              className="inline-flex items-center gap-2 text-sm text-[#4B4B4B] hover:text-[#FFA552] transition-colors"
            >
              <Phone size={18} /> {t('contact.call')}
            </a>
            <a
              href="https://www.instagram.com/nagarejiujitsu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#4B4B4B] hover:text-[#FFA552] transition-colors"
              aria-label={t('contact.instagram')}
            >
              <Instagram size={18} /> {t('contact.instagram')}
            </a>
            <a
              href="mailto:info@nagarejiujitsu.com"
              className="inline-flex items-center gap-2 text-sm text-[#4B4B4B] hover:text-[#FFA552] transition-colors"
              aria-label={t('contact.mail')}
            >
              <Mail size={18} /> {t('contact.mail')}
            </a>
          </div>
        </div>
      </section>
    );
  }