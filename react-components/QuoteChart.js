import React from 'react';
import NavBar from './NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Quote from './Quote'




const QuoteChart = React.createClass({

    render: function() {
        return (
            <MuiThemeProvider>
                <div>
                    <NavBar />
                    <Quote />
                </div>
            </MuiThemeProvider>
        )
    }

});

export default QuoteChart





