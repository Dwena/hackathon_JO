import './team.css';
const team = [
    {
        firstname: 'Ali-Haïdar',
        lastname: 'ATIA',
        role: 'Développeur fullstack',
    },
    {
        firstname: 'Shamnawaz',
        lastname: 'SUBA KHAN',
        role: 'Développeur IA (deep learning)',
    },
    {
        firstname: 'Gabrielle',
        lastname: 'ROLLET',
        role: 'Développeuse IA (machine learning)',
    },
    {
        firstname: 'Guillaume',
        lastname: 'BOUTROUE',
        role: 'Chef de projet',
    },
    {
        firstname: 'Adrien',
        lastname: 'MIRABELLE',
        role: 'Développeur IA (deep learning)',
    },
    {
        firstname: 'Abdelhay',
        lastname: 'BOUTABBA',
        role: 'Développeur front-end',
    }
];
function Accueil() {
  return (
    <div className="accueil">
        <header className="accueil-header">
            <h1>Présentation</h1>
        </header>
        <section className="Introduction">
            <div className="presentation">
                <h2>A propos de notre équipe</h2>
                <p>Nous sommes étudiants à l'école IPSSI en master Dev Data et IA, et nous réalisons ce projet dans le cadre d'un Hackathon interne sur les JO pour évaluer nos capacités à nous adapter à un context qui sort du cadre scolaire avec une équipe "inconnue"</p>
            </div>
        </section>
        <section className="Equipe">
            <div className="cards">
                {team.map((member) => (
                    <div className="card" key={member.firstname}>
                        <h3>{member.firstname}</h3>
                        <p>{member.lastname}</p>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
        <div>
            <header className='accueil-header'>
                <h1>Notre projet sur les JO</h1>
            </header>
            <div className='presentation'>
                <p>Notre projet consiste à prédire pour les JO de Paris , les résultats des différents pays grâce aux données des années précedentes.</p>
                <p>Les données nous ont directement été fournies par l'école sous forme de dataset en format xlsx, json et xml de tous les JO de 1886 a 2020</p>
            </div>
        </div>
    </div>
  );
}

export default Accueil;