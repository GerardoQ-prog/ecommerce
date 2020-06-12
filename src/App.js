import React from 'react';
import './assets/scss/main.scss';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import ClientModule from './modules/client/ClientModule';
import LoggedModule from './modules/logged/LoggedModule';

function App() {
  return (    
     <Router>
       <Switch>
         <Route exact path='/signup' component={ LoggedModule } />
         <Route exact path='/signin' component={ LoggedModule } />
         <Route exact path='/recuperar' component={ LoggedModule } />
         <Route exact path='/' component={ ClientModule } />
         {/* <Route exact path='/' */}
         {/* admin */}

       </Switch>
     </Router>

  );
}

export default App;
