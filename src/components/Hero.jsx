export default function Hero() {
    return (
      <section className="hero-section" id="about">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="badge">Sveicināti</span>
            <h1>Esmu<br /><span className="highlight">Kaspars Sokolovs</span></h1>
            <p className="subtitle">Programmēšanas tehniķis</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">Apskatīt darbus</a>
              <a href="#contact" className="btn btn-secondary">Sazināties</a>
            </div>
          </div>
   
          <div className="hero-visual" aria-hidden="true">
            <div className="code-panel">
              <div className="code-panel-bar">
                <span className="dot dot-a"></span>
                <span className="dot dot-b"></span>
                <span className="dot dot-c"></span>
                <span className="code-panel-name">profile.js</span>
              </div>
              <pre className="code-panel-body">
  <span className="code-kw">const</span> <span className="code-var">developer</span> = {'{'}
    name: <span className="code-str">'Kaspars Sokolovs'</span>,
    role: <span className="code-str">'Programmēšanas tehniķis'</span>,
    stack: [<span className="code-str">'React'</span>, <span className="code-str">'Vite'</span>, <span className="code-str">'Laravel'</span>],
    available: <span className="code-bool">true</span>,
  {'}'}
              </pre>
            </div>
          </div>
        </div>
      </section>
    )
  }