const projectsData = [
  {
    id: 1,
    title: "E-Classroom",
    description: "Interaktīva e-klases sistēma skolēnu un mācību procesu pārvaldībai.",
    tags: ["Laravel", "PHP", "CSS", "JavaScript"],
    link: "https://github.com/KasparsTopG/Classroom",
    image: "/images/classroom.png"
  },
  {
    id: 2,
    title: "Laika Apstākļu Lietotne",
    description: "Aplikācija, kas parāda reāllaika laika ziņas, izmantojot OpenWeather API.",
    tags: ["React", "API", "JavaScript"],
    link: "#",
    image: ""
  },
  {
    id: 3,
    title: "Uzdevumu Pārvaldnieks",
    description: "Interaktīvs To-Do saraksts ar uzdevumu saglabāšanu brauzera atmiņā.",
    tags: ["React", "LocalStorage"],
    link: "#",
    image: ""
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <h2 className="section-title">Mani Projekti</h2>
        <p className="section-lede">
          Daži no darbiem, ko pēdējā laikā esmu veidojis.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`project-card${index === 0 ? " project-card--featured" : ""}`}
          >

            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}

            <div className="project-card-footer">
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skatīt projektu &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
