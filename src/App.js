import React from 'react';
import './scss/main.scss';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Landing from './views/Landing/index'
import Nav from '../src/components/Menu/Nav'

function App() {
  return (
     <Router>
       <Switch>
         <Route path="/" component={Landing} exact></Route>
         <Route path="/categoria" component="Categoria" exact></Route>
       </Switch>
     </Router>

  );
}

export default App;
