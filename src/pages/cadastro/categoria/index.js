import React, { lazy, Suspense } from "react"
import { Link } from "react-router-dom"

const PageDefault = lazy(() => import("../../../components/PageDefault"))

const renderLoader = () => (
  <div className="loading">
    <p>Carregando...</p>
  </div>
)

function CadastroCategoria() {
  return (
    <Suspense fallback={renderLoader()}>
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
        <Link to="/">Ir para home</Link>
      </PageDefault>
    </Suspense>
  )
}
export default CadastroCategoria
