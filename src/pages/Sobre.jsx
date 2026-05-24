import Card from '../components/Card';

function Sobre() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-brand-primary mb-4">Sobre o Curso</h2>
      <p className="text-lg mb-8">Análise e Desenvolvimento de Sistemas é para quem quer transformar código em solução. Uma formação focada em tecnologia atual, para quem quer sair pronto para construir, testar e evoluir sistemas.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Duração e Formato">
          <ul className="space-y-2">
            <li><strong>Duração:</strong> <span className="text-brand-primary font-bold">2.5 anos</span> (Tecnólogo)</li>
            <li><strong>Turmas:</strong> Manhã (7h15 às 10h) ou Noite (19h10 às 22h)</li>
            <li><strong>Modalidades:</strong> Presencial, Semipresencial ou EAD</li>
          </ul>
        </Card>

        <Card title="Perfil do Egresso">
          <p>Ideal para quem tem interesse por programação, lógica e construção de sistemas digitais, buscando uma formação prática para atuar na área de tecnologia.</p>
        </Card>

        <Card title="Mensalidade">
          <p className="text-neutral-dark">De: <del>R$ 2.422,22</del></p>
          <p className="text-2xl mt-2">Por: <strong className="text-brand-accent text-3xl">R$ 1.090,00</strong> mensais</p>
        </Card>

        <Card title="Microcertificações">
          <p className="text-sm mb-2 text-neutral-dark">Conquiste certificações ao longo do curso para fortalecer seu currículo:</p>
          <ul className="list-disc pl-5 text-sm space-y-1 font-semibold text-brand-primary">
            <li>Agile Methodology & Software Design</li>
            <li>Full Stack Developer</li>
            <li>Python Developer</li>
            <li>QA Team</li>
            <li>Cloud Architecture Fundamentals</li>
            <li>Cybersecurity Foundation</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default Sobre;
