import React from 'react';
import Covid from './Components/covid.js';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Statewise from './Components/Statewise.js';
//import Error from './Components/Error.jsx';
const App=()=>{

  return(
  <>
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={Covid}/>
  <Route exact path="/statewise" component={Statewise}/>
  </Switch>
  </BrowserRouter>
  </>)
}

export default App;