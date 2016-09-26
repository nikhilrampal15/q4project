import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
    block: {
        maxWidth: 250
    },
    radioButton: {
        marginBottom: 16
    }
};


export default class RadioButtons extends React.Component {

    constructor(props){
        super(props);
        this.state = {active: null};
    }


    firstRadio = () => {
        this.state.active = 1;
        this.props.onUpdateRadio(this.state.active)
    };

    secondRadio = () => {
        this.state.active = 2;
        this.props.onUpdateRadio(this.state.active)
    };

    thirdRadio = () => {
        this.state.active = 3;
        this.props.onUpdateRadio(this.state.active)
    };

    fourthRadio = () => {
        this.state.active = 4;
        this.props.onUpdateRadio(this.state.active)
    };

    render(){
        return(
        <div>
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                <RadioButton
                    value="not_light"
                    label="Potential for loss"
                    style={styles.radioButton}
                    onClick ={this.firstRadio}
                />
                <RadioButton
                    value="light1"
                    label="Mostly potential for loss, but some concern about potential for gain "
                    style={styles.radioButton}
                    onClick ={this.secondRadio}
                />
                <RadioButton
                    value="light2"
                    label="Mostly potential for gain, but some concern about potential for loss"
                    style={styles.radioButton}
                    onClick ={this.thirdRadio}
                />
                <RadioButton
                    value="light3"
                    label="Potential for gain"
                    style={styles.radioButton}
                    onClick ={this.fourthRadio}
                />
            </RadioButtonGroup>
        </div>
        );
    }
}
