import { Link } from 'react-router-dom';
import { Clock, GraduationCap } from 'lucide-react';
import PageHero from '../components/PageHero';
import homeBackground from '../assets/backgrounds/coding-background-5z97ezjr9j4mq9be-3314022153.jpg';

function Home() {
  return (
    <div>
      <PageHero
        eyebrow="Graduação em"
        title="Análise e Desenvolvimento de Sistemas"
        subtitle="Transforme lógica, programação e criatividade em soluções digitais para o mercado."
        backgroundImage={homeBackground}
      >
        <div className="mb-8 mt-4 flex flex-wrap items-center gap-4 text-lg font-semibold text-neutral-light">
          <span className="flex items-center gap-2"><Clock size={20} /> 2.5 anos</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-2"><GraduationCap size={20} /> Tecnólogo</span>
        </div>
        <Link to="/sobre" className="inline-block bg-support-success text-neutral-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 hover:scale-105 transition-all duration-300">
          Fazer matrícula
        </Link>
      </PageHero>
      
      <section>
        <h2 className="text-2xl font-bold text-brand-primary mb-4">Transforme código em solução</h2>
        <p className="text-lg text-neutral-dark mb-4">Desde o 1º semestre, você desenvolve sistemas web, mobile e aplicações completas, trabalhando com programação, banco de dados, metodologias ágeis e arquiteturas modernas.</p>
        <p className="text-lg text-neutral-dark">É uma formação prática, dinâmica e focada em tecnologia atual, para quem quer sair pronto para construir, testar e evoluir sistemas que realmente funcionam.</p>
      </section>
    </div>
  );
}

export default Home;
