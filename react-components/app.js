import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Nav from './NavBar'
import HorizontalTransition from './Stepper'



injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <div>
        <Nav />
        <HorizontalTransition />
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
    (
    <Router>
     <Route path="/" component={App} />
     <Route path="/results" component={App} />
    </Router>
    ), 
    document.getElementById('root'));