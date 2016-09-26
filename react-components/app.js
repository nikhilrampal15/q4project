import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Nav from './NavBar'
import HorizontalTransition from './Stepper'
import Quote from './Quote'


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
    <App />, 
    document.getElementById('app'));