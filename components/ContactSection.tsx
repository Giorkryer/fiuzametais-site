'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      if (!form.current) {
        throw new Error('Formulário não encontrado');
      }

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      
      alert('Mensagem enviada com sucesso!');
      form.current.reset();
    } catch (error) {
      console.error('Erro detalhado:', error);
      alert('Erro ao enviar mensagem.');
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 5000);
    }
  };

  return (
    <section id="contato"
      className="w-full bg-[#F0F0F0] py-16"
      aria-label="Seção de contato"
    >
      <div className="w-full bg-white py-16">
        <div className="max-w-[600px] mx-auto px-4">
          <h2 className="text-center uppercase text-[25px] font-bold text-black mb-12">
            FALE CONOSCO
          </h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input
                type="text"
                name="user_name"
                className="w-full px-6 py-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30B78F] bg-white peer text-black"
                placeholder=" "
                required
                minLength={3}
              />
              <label className="absolute left-4 top-5 px-2 transform origin-left transition-all duration-200
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                peer-focus:scale-75 peer-focus:-translate-y-8
                scale-75 -translate-y-8
                bg-white text-gray-500 font-medium pointer-events-none">
                Nome
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="user_email"
                className="w-full px-6 py-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30B78F] bg-white peer text-black"
                placeholder=" "
                required
              />
              <label className="absolute left-4 top-5 px-2 transform origin-left transition-all duration-200
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                peer-focus:scale-75 peer-focus:-translate-y-8
                scale-75 -translate-y-8
                bg-white text-gray-500 font-medium pointer-events-none">
                E-mail ou WhatsApp
              </label>
            </div>
            <div className="relative">
              <textarea
                rows={6}
                name="message"
                className="w-full px-6 py-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30B78F] resize-none bg-white peer text-black"
                placeholder=" "
                required
                minLength={10}
              />
              <label className="absolute left-4 top-5 px-2 transform origin-left transition-all duration-200
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                peer-focus:scale-75 peer-focus:-translate-y-8
                scale-75 -translate-y-8
                bg-white text-gray-500 font-medium pointer-events-none">
                Mensagem
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#30B78F] text-white py-4 rounded-lg font-bold uppercase transition-colors ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-[#259678] cursor-pointer' 
              }`}
            >
              {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}