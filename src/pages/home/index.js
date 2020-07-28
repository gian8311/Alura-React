import React, { lazy, Suspense } from "react"
import dadosIniciais from "../../data/dados_iniciais.json"

// import Footer from "./components/Footer"
// import BannerMain from "./components/BannerMain"
// import Carousel from "./components/Carousel"
// import Menu from "./components/Menu"

const Footer = lazy(() => import("../../components/Footer"))
const BannerMain = lazy(() => import("../../components/BannerMain"))
const Carousel = lazy(() => import("../../components/Carousel"))
const Menu = lazy(() => import("../../components/Menu"))

const renderLoader = () => (
  <div className="loading">
    <p>Carregando...</p>
  </div>
)
const Home = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <div style={{ background: "#141414" }}>
        <Menu />

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={
            "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
          }
        />

        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

        <Carousel category={dadosIniciais.categorias[1]} />

        <Carousel category={dadosIniciais.categorias[2]} />

        <Carousel category={dadosIniciais.categorias[3]} />

        <Carousel category={dadosIniciais.categorias[4]} />

        <Carousel category={dadosIniciais.categorias[5]} />

        <Footer />
      </div>
    </Suspense>
  )
}

export default Home
