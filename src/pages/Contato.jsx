import Card from '../components/Card';
import PageHero from '../components/PageHero';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import contatoBackground from '../assets/backgrounds/coding-background-agabbzkualvrbht8-4123006742.jpg';

function Contato() {
  return (
    <div>
      <PageHero
        title="Fale Conosco"
        subtitle="Tire suas dúvidas, fale com a UniFECAF ou venha conhecer a estrutura do curso de ADS."
        backgroundImage={contatoBackground}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Informações de Contato">
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="mr-3 mt-1 text-brand-primary flex-shrink-0" size={20} />
              <span><strong>Endereço:</strong> Av. Vida Nova, 166 - Jardim Maria Rosa, Taboão da Serra - SP, CEP 06764-045</span>
            </li>
            <li className="flex items-start">
              <Phone className="mr-3 mt-1 text-brand-primary flex-shrink-0" size={20} />
              <span><strong>Telefone:</strong> (11) 4210-4950</span>
            </li>
            <li className="flex items-start">
              <Mail className="mr-3 mt-1 text-brand-primary flex-shrink-0" size={20} />
              <span><strong>E-mail:</strong> contato@unifecaf.edu.br</span>
            </li>
            <li className="flex items-start">
              <MessageCircle className="mr-3 mt-1 text-brand-primary flex-shrink-0" size={20} />
              <span>
                <strong>WhatsApp:</strong>{' '}
                <a href="https://wa.me/551142104950" target="_blank" rel="noreferrer" className="text-brand-accent hover:underline">
                  (11) 4210-4950
                </a>
              </span>
            </li>
          </ul>
        </Card>

        <Card title="Localização">
          <div className="w-full h-64 bg-neutral-light rounded-lg overflow-hidden border border-neutral-light">
            <iframe 
              src="https://www.google.com/maps?q=Av.+Vida+Nova,+166+-+Jardim+Maria+Rosa,+Tabo%C3%A3o+da+Serra+-+SP&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Mapa UniFECAF"
            ></iframe>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Contato;
