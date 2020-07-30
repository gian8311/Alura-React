import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/home"
import CadastroVideo from "./pages/cadastro/video"
import CadastroCategoria from "./pages/cadastro/categoria"
import Pagina404 from "./pages/page404"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
)
