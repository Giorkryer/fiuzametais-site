'use client';
import { FiPhone, FiMail, FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

// Ícone customizado para o Kwai (não disponível no react-icons)
const KwaiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8 8 8.67 8 9.5 7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#333333] text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Central de Atendimento */}
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-bold text-lg mb-2">CENTRAL DE ATENDIMENTO</h3>
            <div className="flex items-center gap-3">
              <FiPhone className="text-2xl" />
              <span>85 99253-7639 (Compra e Venda)</span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-2xl" />
              <span>85 99150-5505 (Administração)</span>
            </div>
          </div>

          {/* Contatos Centralizado */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="uppercase font-bold text-lg mb-2">CONTATOS</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <FiPhone className="text-2xl" />
                <span>85 99253-7639</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <FiMail className="text-2xl" />
                <span>comercial@fiuzametal.com.br</span>
              </div> 
            </div>
          </div>

          {/* Nossas Redes - Atualizado com novas redes */}
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-bold text-lg mb-2">NOSSAS REDES</h3>
            
            {/* Instagram */}
            <a 
              href="https://instagram.com/fiuzametais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#30B78F] transition-colors"
            >
              <FiInstagram className="text-2xl" />
              <span>@fiuzametais</span>
            </a>
            
            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@fiuza.metais.reci" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#30B78F] transition-colors"
            >
              <FaTiktok className="text-2xl" />
              <span>@fiuzametais</span>
            </a>
            
            {/* Kwai */}
            <a 
              href="https://kwai.com/fiuzametais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#30B78F] transition-colors"
            >
              <KwaiIcon />
              <span>@fiuzametais</span>
            </a>
          </div>

        </div>

        {/* Divisor */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Fiuza Metais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}