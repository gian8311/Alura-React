import React, { lazy, Suspense, useState } from "react"
import { Link } from "react-router-dom"
import RenderLoader from "../../../components/RenderLoader"
import "./Categoria.css"
import FormField from "../../../components/FormField"
import Button from "../../../components/Button"

const PageDefault = lazy(() => import("../../../components/PageDefault"))

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([])
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000000",
  }
  const [values, setValues] = useState(valoresIniciais)

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChange(event) {
    const target = event.target
    setValue(target.getAttribute("name"), target.value)
  }

  return (
    <Suspense fallback={RenderLoader()}>
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        <form
          className="form"
          onSubmit={function handleSubmit(event) {
            event.preventDefault()
            setCategorias([...categorias, values])

            setValues(valoresIniciais)
          }}
        >
          <FormField
            className="nome"
            name="nome"
            id="nome"
            value={values.nome}
            onChange={handleChange}
            label="Nome da Categoria"
          />

          <FormField
            className="descricao"
            name="descricao"
            id="descricao"
            value={values.descricao}
            onChange={handleChange}
            label="Descrição"
            inputTag="textarea"
          />

          <FormField
            className="cor"
            type="color"
            name="cor"
            id="cor"
            value={values.cor}
            onChange={handleChange}
            label="Cor"
          />

          <Button type="submit">Cadastrar</Button>
        </form>
        <ul>
          {categorias.map((categoria, index) => {
            return <li key={`${categoria.nome}${index}`}>{categoria.nome}</li>
          })}
        </ul>
        <Link to="/" className="goHome">
          Ir para home
        </Link>
      </PageDefault>
    </Suspense>
  )
}
export default CadastroCategoria
