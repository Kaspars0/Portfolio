export default function Footer() {
    return (
      <footer id="contact" className="footer">
        <div className="footer-inner">
          <div className="footer-intro">
            <h2>Sazināmies!</h2>
            <p>Esmu atvērts jauniem projektiem un darba piedāvājumiem.</p>
            <a href="mailto:ipa24.k.sokolovs@vtdt.edu.lv" className="btn btn-primary">
              Rakstīt e-pastu
            </a>
          </div>
   
          <div className="footer-contact">
            <a href="mailto:ipa24.k.sokolovs@vtdt.edu.lv" className="footer-email">ipa24.k.sokolovs@vtdt.edu.lv</a>
            <div className="social-links">
              <a href="https://github.com/Kaspars0" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Kaspars Sokolovs. Visas tiesības aizsargātas.</p>
      </footer>
    )
  }