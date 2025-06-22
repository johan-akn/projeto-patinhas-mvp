import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      {/* <Link to="/">Home</Link> */}
      <Link
        to="https://docs.google.com/forms/d/e/1FAIpQLSc_7zhh8MlUxtCWkP6wpkEcUAR-2U6mzQe0dN4XPjZAaoYzZA/viewform?pli=1"
        target="_blank"
        rel="noopener noreferrer">Formulário</Link>
      <Link
        to="https://instagram.com/scpatinhas"
        target="_blank"
        rel="noopener noreferrer">Contato</Link>
    </nav>
  )
}

export default Navbar
