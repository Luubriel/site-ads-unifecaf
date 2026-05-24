import Card from '../components/Card';
import PageHero from '../components/PageHero';
import disciplinasBackground from '../assets/backgrounds/coding-background-lyj6ue5tcn1lcb7a-4249621059.jpg';

function Disciplinas() {
  const modulos = [
    {
      nome: 'Introducing to Technology',
      disciplinas: ['Agile Methods', 'Computational Logical Using Python', 'Database Modeling & SQL', 'Mathematical Logical']
    },
    {
      nome: 'Full Stack Development',
      disciplinas: ['Design Web', 'Machine Learning & CHATBOT', 'Web Programming for Back End', 'Web Programming for Front End']
    },
    {
      nome: 'Software Development',
      disciplinas: ['Agile Software Design', 'Data Structure Strategy', 'Development with Python', 'Object Oriented Programming', 'Quality Assurance', 'Software Engineering']
    },
    {
      nome: 'Mobile & Game Development',
      disciplinas: ['Disruptive Architectures: IoT, Big Data e IA', 'Game Development', 'Mobile Development']
    },
    {
      nome: 'Network and Cyber Security',
      disciplinas: ['Computer Architecture', 'Computer Network', 'Cyber Security', 'Development Tools & Cloud Computing', 'Server and Data Center Administration']
    },
    {
      nome: 'Mercado e Carreira',
      disciplinas: ['ESG: Sustentabilidade', 'Liderança Exponencial', 'Gestão da Diversidade', 'Resolução Eficaz de Problemas']
    }
  ];

  return (
    <div>
      <PageHero
        title="Matriz Curricular"
        subtitle="Conheça os módulos que formam um currículo prático, atualizado e conectado com o desenvolvimento de sistemas."
        backgroundImage={disciplinasBackground}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modulos.map((modulo, index) => (
          <Card key={index} title={modulo.nome}>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {modulo.disciplinas.map((disc, idx) => (
                <li key={idx}>{disc}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Disciplinas;
