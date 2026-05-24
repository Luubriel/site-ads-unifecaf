function PageHero({ eyebrow, title, subtitle, backgroundImage, children }) {
  return (
    <section
      className="relative mb-8 min-h-64 overflow-hidden rounded-xl bg-neutral-dark p-8 text-neutral-white shadow-lg sm:p-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark/95 via-brand-primary/80 to-neutral-dark/35" />
      <div className="relative z-10 max-w-3xl">
        {eyebrow && <span className="mb-2 block text-lg font-medium text-neutral-light">{eyebrow}</span>}
        <h1 className="text-3xl font-bold leading-tight text-neutral-white md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg leading-7 text-neutral-light">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export default PageHero;
