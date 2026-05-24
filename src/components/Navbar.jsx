import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-color-white.webp';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Disciplinas', path: '/disciplinas' },
    { label: 'Professores', path: '/professores' },
    { label: 'Contato', path: '/contato' },
  ];

  const navLinkClass = ({ isActive }) =>
    [
      'inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
      isActive
        ? 'bg-neutral-white text-brand-primary shadow-sm'
        : 'text-neutral-light hover:bg-neutral-white/10 hover:text-neutral-white',
    ].join(' ');

  return (
    <header className="sticky top-0 z-50 bg-brand-primary shadow-lg shadow-neutral-dark/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <Link to="/" className="flex items-center gap-3 no-underline" onClick={() => setIsMenuOpen(false)}>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-white/10 ring-1 ring-neutral-white/20">
            <img src={logo} alt="Logo UniFECAF" className="h-8 w-auto" />
          </span>
          <span className="leading-tight text-neutral-white">
            <span className="block text-base font-bold">Site ADS</span>
            <span className="block text-xs font-medium text-neutral-light">UniFECAF</span>
          </span>
        </Link>

        <ul className="m-0 hidden list-none items-center gap-2 p-0 md:flex">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={navLinkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-white/10 text-neutral-white ring-1 ring-neutral-white/20 transition hover:bg-neutral-white/20 md:hidden"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-neutral-white/10 bg-brand-primary px-4 pb-4 md:hidden">
          <ul className="mx-auto m-0 flex max-w-6xl list-none flex-col gap-2 p-0">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={(navState) => `${navLinkClass(navState)} w-full`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
