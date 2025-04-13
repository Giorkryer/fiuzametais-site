// components/ProcessoSection.tsx
'use client';
import Image from 'next/image';
import ProcessoSectionMobile from './ProcessoSectionMobile';

export default function ProcessoSection() {
  return (
    <>
      <ProcessoSectionMobile />
      
      {/* Seção para Desktop */}
      <section 
        aria-label="Nosso processo de trabalho" 
        className="hidden md:block py-16 w-screen relative left-1/2 right-1/2 -mx-[50vw] min-h-[805px]"
      >
        {/* Background com imagem */}
        <div 
          role="presentation" 
          aria-hidden="true"
          className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/logofiuzabranca.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Container do conteúdo */}
        <div className="max-w-[1200px] h-full mx-auto px-4 flex items-center">
          <div  className="flex gap-8 w-full">
            {/* Card de texto */}
            <article 
              className="bg-[#E3E5E5] p-12 w-[750px] h-[600px] flex flex-col rounded-[8px]"
              style={{ boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.08)' }}
            >
              <header className="space-y-6" >
                <p className="font-sans uppercase text-xl text-black font-medium">
                  Sobre o nosso processo
                </p>
                <h2 className="font-sans uppercase text-[24px] leading-[1.1] text-black font-extrabold">
                Processo Sustentável e Reciclagem Responsável
                </h2>
              </header>
              
              <p className="font-sans text-[20px] text-black font-normal mt-6">
              Na nossa sucata trabalhamos com responsabilidade ambiental e foco na reutilização de materiais. Recebemos diversos tipos de resíduos metálicos, como ferro, alumínio, cobre e aço, que passam por triagem, separação e pesagem. Após isso, os materiais são preparados para reciclagem ou revenda, contribuindo para a economia circular. Também realizamos a desmontagem segura de equipamentos, veículos e estruturas metálicas. 
              </p>
            </article>

            {/* Container da imagem */}
            <figure className="w-[1000px] h-[675px] rounded-[8px] overflow-hidden">
              <Image
                src="/pauloimage.jpeg"
                alt="Diagrama do nosso processo de coleta"
                width={1000}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
