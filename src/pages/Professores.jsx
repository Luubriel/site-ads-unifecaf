import Card from '../components/Card';
import PageHero from '../components/PageHero';
import fotoRafael from '../assets/rafael.jpg';
import fotoGeovane from '../assets/geovane.png';
import fotoFlavio from '../assets/flavio.jpg';
import fotoFrancisco from '../assets/francisco.jpg';
import professoresBackground from '../assets/backgrounds/programming-coding-language_bGhpbm6UmZqaraWkpJRmbmdlrWZlbWU-2122011468.jpg';

function Professores() {
  const professores = [
    {
      id: 1,
      nome: 'Rafael Venâncio de Oliveira',
      area: 'Design Web',
      foto: fotoRafael
    },
    {
      id: 2,
      nome: 'Geovane Soares Galvão Junior',
      area: 'Web Programming For Back End',
      foto: fotoGeovane
    },
    {
      id: 3,
      nome: 'Flavio Roberto Silva Santarelli',
      area: 'Machine Learning & Chatbot',
      foto: fotoFlavio
    },
    {
      id: 4,
      nome: 'Francisco Coelho Citó Feitosa',
      area: 'Web Programming For Front End',
      foto: fotoFrancisco
    }
  ];

  return (
    <div>
      <PageHero
        title="Corpo Docente"
        subtitle="Conheça professores com experiência em tecnologia, desenvolvimento web, dados e soluções digitais."
        backgroundImage={professoresBackground}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {professores.map(prof => (
          <Card key={prof.id}>
            <div className="text-center flex flex-col items-center">
              <img src={prof.foto} alt={`Foto de ${prof.nome}`} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-brand-primary shadow-md" />
              <h3 className="text-xl font-semibold mb-1">{prof.nome}</h3>
              <p className="text-brand-accent font-bold mb-1">{prof.area}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Professores;
