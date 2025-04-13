// components/ConteudoPrincipal.tsx
'use client';

export default function ConteudoPrincipal() {
  return (
    <div className="relative h-screen w-full"> 
      <div className="container mx-auto px-4 sm:px-8 h-full flex items-center">
        <div className="max-w-2xl lg:max-w-4xl space-y-6 md:space-y-8 text-white">
          <h2 className="text-base md:text-6xl font-bold">
          CAPTAÇÃO E PROCESSAMENTO DE RESÍDUOS
          </h2>

          {/* Título */}
          <h1 className="text-3xl md:text-3xl font-bold leading-tight">
            SUA SUCATA VALE DINHEIRO!
          </h1>

          {/* Texto Secundário */}
          <p className="text-base md:text-lg font-normal">
            Somos especializados na coleta e processamento de todos os tipos de materiais recicláveis. 
            Nossa equipe de especialistas garante triagem eficiente, descarte adequado e soluções de 
            reciclagem ambientalmente responsáveis.
          </p>

          {/* Container dos Botões */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8 md:mt-12">
            <a 
              href="#servicos" 
              className="px-8 py-3 md:px-10 md:py-4 bg-white rounded-lg md:rounded-xl text-[#006241] text-sm md:text-base font-bold hover:bg-gray-300 transition-all duration-300"
              aria-label="Nossos Serviços"
            >
              Nossos Serviços
            </a>
            
            <a 
              href="#contato" 
              className="px-8 py-3 md:px-10 md:py-4 border-2 border-white rounded-lg md:rounded-xl text-white text-sm md:text-base font-bold hover:bg-white/10 transition-all duration-300"
              aria-label="Contate-nos"
            >
              Contate-nos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}