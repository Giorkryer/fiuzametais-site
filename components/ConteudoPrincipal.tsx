// components/ConteudoPrincipal.tsx
'use client';

import { useState } from 'react';

export default function ConteudoPrincipal() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoId = 'wXUnadUlI_0';

  const openVideoInNewTab = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="relative h-screen w-full">
      <div className="container mx-auto px-4 sm:px-8 h-full flex items-center">
        {/* Aumentei o gap para 16 (lg:gap-16) e ajustei a proporção do grid */}
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Container de Texto - Diminuí a flex-grow para dar mais espaço ao vídeo */}
          <div className="flex-1 lg:flex-[1.2] space-y-8 md:space-y-8">
            {/* Seu conteúdo de texto permanece igual */}
            <h2 className="text-base md:text-6xl font-bold">
              CAPTAÇÃO E PROCESSAMENTO DE RESÍDUOS
            </h2>

            <h1 className="text-3xl md:text-3xl font-bold leading-tight">
              SUA SUCATA VALE DINHEIRO!
            </h1>

            <p className="text-base md:text-lg font-normal">
              Somos especializados na coleta e processamento de todos os tipos de materiais recicláveis.
              Nossa equipe de especialistas garante triagem eficiente, descarte adequado e soluções de
              reciclagem ambientalmente responsáveis.
            </p>

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

          {/* Container do Vídeo - Aumentei significativamente o tamanho */}
          <div className="flex-1 lg:flex-[1.5] w-full">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-800 transform hover:scale-[1.02] transition-transform duration-300">
              
              {/* Thumbnail de pré-carregamento */}
              <img
                src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Pré-visualização do vídeo"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                }}
              />

              {/* Vídeo incorporado - agora maior */}
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
                title="Processamento de resíduos - Vídeo explicativo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={`absolute inset-0 w-full h-full ${videoLoaded ? 'block' : 'invisible'}`}
                onLoad={() => setVideoLoaded(true)}
                onError={() => setVideoError(true)}
                loading="lazy"
              />

              {/* Fallback para erro */}
              {videoError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gray-900/90">
                  <div className="text-white mb-4 text-lg">O vídeo não pôde ser carregado.</div>
                  <button
                    onClick={openVideoInNewTab}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2 text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                    Assistir no YouTube
                  </button>
                </div>
              )}

              {/* Botão de play overlay aumentado */}
              {!videoLoaded && !videoError && (
                <button
                  onClick={() => document.querySelector('iframe')?.focus()}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Reproduzir vídeo"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}