import React, { lazy, Suspense } from "react"
import { Link } from "react-router-dom"

const PageDefault = lazy(() => import("../../../components/PageDefault"))

const renderLoader = () => (
  <div className="loading">
    <p>Carregando...</p>
  </div>
)

function CadastroVideo() {
  return (
    <Suspense fallback={renderLoader()}>
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>
        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      </PageDefault>
    </Suspense>
  )
}
export default CadastroVideo
