import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    margin: 12
};

const QuoteButton = () => (
    <div>
        <RaisedButton label="Submit" primary={true} style={style} fullWidth={true}  />
    </div>
);

export default QuoteButton;