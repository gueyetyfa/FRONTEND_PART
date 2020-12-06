import React,{ Component } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Etudiant from "./profils/Etudiant/index"
import Enseignant from "./profils/Enseignant/index"
import Finance from "./profils/Finance/index"
import Bibliotheque from "./profils/Bibliotheque/index"
import Admin from "./profils/Admin/index"
import AssistantDpt from "./profils/AssistantDpt/index"
import Scolarite from "./profils/Scolarite/index"
import Login from "./auth/login"
import { Provider } from 'react-redux'
import store from './store'
import PrivateRoute from "./auth/PrivateRoute"

import {loadUser} from "./actions/auth";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class App extends Component{

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/etudiant" component={Etudiant} />
            <Route path="/scolarite" component={Scolarite} />
            <Route path="/bibliotheque" component={Bibliotheque} />
            <Route path="/finance" component={Finance} />
            <Route path="/admin" component={Admin} />
            <Route path="/enseignant" component={Enseignant} />
            <Route path="/departement" component={AssistantDpt} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
      </Provider>
    )
  }
}

export default App