import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import './Home.css'
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="container-home">
        <div className="texto-principal">
          <h1>Um coração apertado em Floripa?</h1>
          <h1> Vamos trazer seu melhor amigo de volta pra casa.</h1>
        </div>

        <div className="texto-explicativo">
          <ol>
            <li>
              <strong>Você nos conta tudo:</strong> Preencha nosso formulário com as fotos e detalhes do pet. Cada informação é crucial para ajudar na busca!
            </li>
            <li>
              <strong>Preparamos com carinho:</strong> Nossa equipe de voluntários recebe seu relato, organiza as informações e cria um post claro e otimizado para facilitar o compartilhamento.
            </li>
            <li>
              <strong>Divulgação em massa:</strong> Publicamos o alerta em nossa rede de parceiros, incluindo os principais grupos de bairros e de pets de Floripa, para garantir o máximo alcance e aumentar as chances de reencontro.
            </li>
          </ol>
        </div>

        <div className="link-formulario">
          <a
            className="botao-pet"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_7zhh8MlUxtCWkP6wpkEcUAR-2U6mzQe0dN4XPjZAaoYzZA/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            RELATAR PET PERDIDO
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Home
