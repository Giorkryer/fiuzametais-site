// components/ServicosSection.tsx
'use client';

export default function ServicosSection() {
  const services = [
    {
      title: "Coleta de resíduos",
      description: "Proporcionamos orientação especializada para sucateiros, com dicas práticas e estratégias para maximizar a eficiência e a rentabilidade no setor de reciclagem.",
      link: "https://wa.me/558591505505"
    },
    {
      title: "Mentoria para Recicladores",
      description: "Oferecemos serviços de coleta de resíduos eficientes e sustentáveis, garantindo o descarte adequado e a reciclagem de materiais.",
      link: "https://form.respondi.app/mdzhPm65"
    },
    {
      title: "Clube Vip",
      description: "Participe do nosso Clube Vip, um grupo exclusivo no WhatsApp para sucateiros. Conecte-se com outros profissionais e crie networking valioso para expandir seus negócios.",
      link: "https://sun.eduzz.com/2446984"
    },
    {
      title: "Planilha de controle",
      description: "Nossa Planilha de Controle, uma ferramenta prática para ajudar a organizar suas atividades, gerenciar estoques e otimizar a gestão financeira de seus negócios.",
      link: "https://sun.eduzz.com/2458181"
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-gray-100 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
      <div className="w-full px-4 sm:px-8 mx-auto">
        {/* Título Principal */}
        <h2 id='processo' className="text-3xl md:text-4xl font-bold text-center text-[#006241] mb-6">
          Nossos Serviços
        </h2>
        
        {/* Texto Descrição */}
        <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">
        Soluções abrangentes de gestão de resíduos e reciclagem para empresas e comunidades
        </p>

        {/* Grid de Serviços */}
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[90rem] mx-auto ">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
              <h3 className="text-xl font-bold text-[#006241] mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-base text-gray-700 mb-4">
                {service.description}
              </p>
              <a target="_blank"
                href={service.link} 
                className="text-base text-[#30b78f] hover:text-[#25896d] transition-colors"
                aria-label={`Saber Mais Sobre ${service.title}`}
              >
                Saber Mais →
              </a>
            </div>
          ))}
        </div >
      </div>
    </section>
  );
}