import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import logo from '../assets/logo-color-white.webp';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Sobre o curso', path: '/sobre' },
    { label: 'Disciplinas', path: '/disciplinas' },
    { label: 'Professores', path: '/professores' },
    { label: 'Contato', path: '/contato' },
  ];

  return (
    <footer className="mt-auto bg-neutral-dark text-neutral-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 md:grid-cols-[1.2fr_1fr_1.3fr] md:items-start lg:px-8">
        <div className="space-y-3">
          <Link to="/" className="inline-flex items-center gap-3 no-underline">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-white/10 ring-1 ring-neutral-white/15">
              <img src={logo} alt="Logo UniFECAF" className="h-7 w-auto" />
            </span>
            <span>
              <span className="block text-base font-bold">ADS UniFECAF</span>
              <span className="block text-xs text-neutral-light">Análise e Desenvolvimento de Sistemas</span>
            </span>
          </Link>

          <p className="max-w-md text-sm leading-5 text-neutral-light">
            Formação tecnológica com foco em programação, banco de dados e soluções digitais.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide text-neutral-white">Navegação</h2>
          <ul className="mt-3 m-0 grid list-none grid-cols-2 gap-x-4 gap-y-2 p-0 md:block md:space-y-2">
            {footerLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-sm text-neutral-light transition-colors hover:text-neutral-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide text-neutral-white">Contato rápido</h2>
          <ul className="mt-3 m-0 grid list-none gap-2 p-0 text-sm text-neutral-light sm:grid-cols-2 md:grid-cols-1">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-support-success" />
              <span>Av. Vida Nova, 166 - Taboão da Serra - SP</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="flex-shrink-0 text-support-success" />
              <span>(11) 4210-4950</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="flex-shrink-0 text-support-success" />
              <a href="https://wa.me/551142104950" target="_blank" rel="noreferrer" className="transition-colors hover:text-neutral-white">
                WhatsApp UniFECAF
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="flex-shrink-0 text-support-success" />
              <a href="mailto:contato@unifecaf.edu.br" className="break-all transition-colors hover:text-neutral-white">
                contato@unifecaf.edu.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-xs text-neutral-light sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; {currentYear} UniFECAF. Todos os direitos reservados.</p>
          <p>Curso Superior de Tecnologia</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
