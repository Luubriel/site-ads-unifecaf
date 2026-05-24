import Card from '../components/Card';

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
      <h2 className="text-3xl font-bold text-brand-primary mb-4">Matriz Curricular</h2>
      <p className="text-lg mb-8">Conheça os módulos que formam o nosso currículo prático e atualizado.</p>

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
