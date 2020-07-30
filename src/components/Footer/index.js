import React from "react"
import { FooterBase, ImgLogo } from "./styles"
import Logo from "../../assets/img/Logo.png"
import { Link } from "react-router-dom"
function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <ImgLogo src={Logo} alt="Logo Albflix" />
      </Link>
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  )
}

export default Footer
