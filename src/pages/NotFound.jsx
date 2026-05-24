import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl md:text-8xl font-bold text-support-error mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Página não encontrada</h2>
      <p className="text-lg mb-8 text-neutral-dark">Ops! A página que você está procurando não existe ou foi movida.</p>
      <Link to="/" className="inline-block bg-brand-primary text-neutral-white px-6 py-3 rounded-full font-bold hover:bg-brand-accent transition-colors duration-300">
        Voltar para a Home
      </Link>
    </div>
  );
}

export default NotFound;
