import React, { lazy, Suspense } from "react"
import { Link } from "react-router-dom"

const PageDefault = lazy(() => import("../../components/PageDefault"))

const renderLoader = () => (
  <div className="loading">
    <p>Carregando...</p>
  </div>
)
function Pagina404() {
  return (
    <Suspense fallback={renderLoader()}>
      <PageDefault>
        <div className="page404">
          <h1>Oops...</h1>
          <h2>Página não encontrada!</h2>
          <Link to="/">Voltar para a home</Link>
        </div>
      </PageDefault>
    </Suspense>
  )
}
export default Pagina404
