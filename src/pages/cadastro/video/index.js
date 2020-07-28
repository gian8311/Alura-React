import React, { lazy, Suspense } from "react"
import { Link } from "react-router-dom"
import RenderLoader from "../../../components/RenderLoader"

const PageDefault = lazy(() => import("../../../components/PageDefault"))

function CadastroVideo() {
  return (
    <Suspense fallback={RenderLoader()}>
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>
        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      </PageDefault>
    </Suspense>
  )
}
export default CadastroVideo
