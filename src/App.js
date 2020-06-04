import React from 'react';
import './scss/main.scss';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Landing from './views/Landing/index'
import Categoria from './views/Categoria/index'
import Register from './views/Register/index'
import Products from './views/Products/index'

function App() {
  return (
     <Router>
       <Switch>
         <Route path="/" component={Landing} exact></Route>
         <Route path="/categoria/:id" component={Categoria} exact></Route>
         <Route path="/register" component={Register} exact></Route>
         <Route path="/products" component={Products} exact></Route>
       </Switch>
     </Router>

  );
}

export default App;
