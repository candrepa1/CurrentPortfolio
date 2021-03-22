import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing.js';
import Projects from './components/Projects.js';

// material ui 
import { ThemeProvider } from '@material-ui/core/styles';
import { paletteTheme } from './themes/themes.js';


function App() {
  return (
    <ThemeProvider theme={paletteTheme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/">
              <Landing/>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
