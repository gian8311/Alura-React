import React, { lazy, Suspense } from "react"
import { Link } from "react-router-dom"
import RenderLoader from "../../../components/RenderLoader"

const PageDefault = lazy(() => import("../../../components/PageDefault"))

function CadastroCategoria() {
  return (
    <Suspense fallback={RenderLoader()}>
      <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <form>
          <label for="categoria">Nome da Categoria</label>
          <input type="text" id="categoria" />
          <button>Cadastrar</button>
        </form>

        <Link to="/">Ir para home</Link>
      </PageDefault>
    </Suspense>
  )
}
export default CadastroCategoria
