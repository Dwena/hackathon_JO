import './accueil.css';
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
    },
    {
        firstname: 'Oumar',
        lastname: 'TRAORE',
        role: 'ABSENT',
    }
];
function Accueil() {
  return (
    <div className="accueil">
        <header className="accueil-header">
            <h1>Accueil</h1>
        </header>
        <section className="Introduction">
            <h2>A propos de notre équipe</h2>
            <p>Nous sommes étudiants à l'école IPSSI en master Dev Data et IA, et nous réalisons ce projet dans le cadre d'un Hackathon interne sur les JO pour évaluer nos capacités à nous adapter à un context qui sort du cadre scolaire avec une équipe "inconnue"</p>
        </section>
        <section className="Project">
            <h2>Notre projet sur les JO</h2>
            <p>Notre projet consiste à prédire pour les JO de Paris , les résultats des différents pays grâce aux données des années précedentes.</p>
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
    </div>
  );
}

export default Accueil;