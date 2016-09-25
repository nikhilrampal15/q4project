import React from 'react';
import TextField from 'material-ui/TextField';
import {Grid, Row, Col} from 'react-bootstrap';
import QuoteLink from './QuoteLink'


export default class Quote extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };
    
    
    render() {
        return (
            <Grid>
                <Row>

                    <Col lg={3} lgOffset = {8}>
                    <TextField
                        ref
                        id="text-field-controlled"
                        placeholder = "Quote Ex. AAPL"
                        value={this.state.value}
                        onChange={this.handleChange}
                     />
                    </Col>
                    <Col lg ={1} >
                        <QuoteLink value={this.state.value}/>
                    </Col>
                </Row>
            </Grid>
        );

    }
}



