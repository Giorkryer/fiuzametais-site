// components/ProcessoSectionMobile.tsx
'use client';
import Image from 'next/image';

export default function ProcessoSectionMobile() {
  return (
    <section 
      aria-label="Nosso processo de trabalho - Mobile"
      className="md:hidden py-12 w-full relative"
    >
      <div className="max-w-[1200px] h-full mx-auto px-4">
        {/* Card de texto */}
        <article 
          className="bg-white p-6 w-full flex flex-col rounded-[8px] mb-8 shadow-lg"
        >
          <header className="space-y-4">
            <p className="font-sans uppercase text-lg text-black font-medium">
              Sobre o nosso processo
            </p>
            <h2 className="font-sans uppercase text-xl leading-[1.1] text-black font-extrabold">
            Processo Sustentável e Reciclagem Responsável
            </h2>
          </header>
          
          <p className="font-sans text-base text-black font-normal mt-4">
          Na nossa sucata de médio porte, trabalhamos com responsabilidade ambiental e foco na reutilização de materiais. Recebemos diversos tipos de resíduos metálicos, como ferro, alumínio, cobre e aço, que passam por triagem, separação e pesagem. 
          </p>
        </article>

        {/* Imagem */}
        <figure className="w-full h-128 rounded-[8px] overflow-hidden shadow-lg">
          <Image
            src="/pauloimage.jpeg"
            alt="Processo de coleta móvel"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </figure>
      </div>
    </section>
  );
}