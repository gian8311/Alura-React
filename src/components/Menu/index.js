import React from "react"
import Logo from "../../assets/img/Logo.png"
import { Link } from "react-router-dom"
import "./Menu.css"
import Button from "../Button"

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Gianflix logo" />
      </Link>
      <Button as={Link} className="ButtonNewVideo" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  )
}
export default Menu
