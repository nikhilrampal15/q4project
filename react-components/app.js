import React from 'react';
import ReactDOM from 'react-dom';
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
    <App />,
    document.getElementById('app')
);