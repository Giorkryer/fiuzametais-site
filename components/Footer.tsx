'use client';
import { FiPhone, FiMail, FiInstagram } from 'react-icons/fi';

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
              <span>00 0000-0000</span>
            </div>
          </div>

          {/* Contatos Centralizado */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="uppercase font-bold text-lg mb-2">CONTATOS</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <FiPhone className="text-2xl" />
                <span>00 0000-0000</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <FiMail className="text-2xl" />
                <span>exemplo@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Nossas Redes */}
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-bold text-lg mb-2">NOSSAS REDES</h3>
            <a 
              href="https://instagram.com/fiuzametais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#30B78F] transition-colors"
            >
              <FiInstagram className="text-2xl" />
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