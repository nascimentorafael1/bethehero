import React from 'react';
// importando o pacote de rotas (Switch p/ garantir q uma rota seja acionada por momento)
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

// o react já pega o index.js
import Logon from './pages/logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

// o exact na primeira rota (raiz) é obrigatório, para que essa rota somente seja acessada pela raiz, e não atrapalhe as outras rotas
export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}