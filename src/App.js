import React, {useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './pages/Home'
import {Page} from './pages/Page'

import './App.css';

function App() {
    




    useEffect(() => {
        document.title = 'rjs-localStorage';
    }, []);

    return (
      <>
      <Router>
              <Switch>
                  <Route exact path='/'>
                      <Home />
                  </Route>
                  <Route exact path='/page' >
                    <Page />
                </Route>
              </Switch>
      </Router>
  </>

    );
}

export default App;
