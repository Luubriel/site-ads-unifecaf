import { Link } from 'react-router-dom';
import { Clock, GraduationCap } from 'lucide-react';

function Home() {
  return (
    <div>
      <section className="text-center bg-gradient-to-br from-neutral-dark to-brand-primary text-neutral-white p-16 rounded-xl mb-8 shadow-lg">
        <span className="text-xl font-light block mb-2">Graduação em</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-accent">Análise e Desenvolvimento de Sistemas</h1>
        <div className="flex justify-center items-center gap-4 text-lg mb-8 mt-4 font-semibold text-neutral-light">
          <span className="flex items-center gap-2"><Clock size={20} /> 2.5 anos</span>
          <span>|</span>
          <span className="flex items-center gap-2"><GraduationCap size={20} /> Tecnólogo</span>
        </div>
        <Link to="/sobre" className="inline-block bg-support-success text-neutral-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 hover:scale-105 transition-all duration-300">
          Fazer matrícula
        </Link>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-brand-primary mb-4">Transforme código em solução</h2>
        <p className="text-lg text-neutral-dark mb-4">Desde o 1º semestre, você desenvolve sistemas web, mobile e aplicações completas, trabalhando com programação, banco de dados, metodologias ágeis e arquiteturas modernas.</p>
        <p className="text-lg text-neutral-dark">É uma formação prática, dinâmica e focada em tecnologia atual, para quem quer sair pronto para construir, testar e evoluir sistemas que realmente funcionam.</p>
      </section>
    </div>
  );
}

export default Home;
