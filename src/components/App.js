import React, { Component } from 'react';
import '../css/style.css';
import Header from '../components/Header/Header.js';
import Home from '../components/Home/Home.js';
import Self from '../components/Self/Self.js';

import {BrowserRouter as Router ,Route} from 'react-router-dom';

export default class App extends Component {
 render(){
   return(
<Router>
  <div>
  <Header/>
  <Route exact path="/" component={Home}></Route>
  <Route path="/self" component={Self}></Route>
</div>
</Router>
   );
 }
}

