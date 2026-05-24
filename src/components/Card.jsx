function Card({ title, children }) {
  return (
    <div className="bg-neutral-white rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 mb-6 border border-neutral-light">
      {title && <h3 className="text-brand-primary text-xl font-semibold mb-4">{title}</h3>}
      <div className="text-neutral-dark">
        {children}
      </div>
    </div>
  );
}

export default Card;
