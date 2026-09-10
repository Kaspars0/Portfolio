const skills = ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Vite", "Git & GitHub", "Responsive Design", "Laravel", "PHP"]
 
export default function Skills() {
  return (
    <section id="skills" className="section bg-alt">
      <div className="section-head">
        <h2 className="section-title">Tehnoloģijas un Prasmes</h2>
        <p className="section-lede">Rīki un valodas, ar kurām strādāju ikdienā.</p>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-chip">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}