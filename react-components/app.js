import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Nav from './NavBar'
import HorizontalTransition from './Stepper'
import Quote from './Quote'
import QuoteChart from './QuoteChart'

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <div>
        <Nav />
        <Quote />
        <HorizontalTransition />
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
    (
    <Router>
     <Route path="/" component={App} />
     <Route path="/results" component={App} />
     <Route path="/quote" component ={QuoteChart} />
    </Router>
    ), 
    document.getElementById('root'));