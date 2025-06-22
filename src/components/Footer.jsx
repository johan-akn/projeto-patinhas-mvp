import './Footer.css'

function Footer() {
  return (
    <footer className="container-footer">
      <div className="texto-footer">
        Feito com <span className="coracao-footer">♥</span> por <span className="footer-brand">Projeto Patinhas</span>
      </div>
      <div className="footer-links">
        <a
          className="link-ig"
          href="https://www.instagram.com/projetopatinhassc/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Projeto Patinhas"
        >
          Instagram
        </a>
      </div>
    </footer>
  )
}

export default Footer