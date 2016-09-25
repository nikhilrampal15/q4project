import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
    block: {
        maxWidth: 250
    },
    radioButton: {
        marginBottom: 16
    }
};

const RadioButtons = () => (
    <div>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            <RadioButton
                value="not_light"
                label="Potential for loss"
                style={styles.radioButton}
            />
            <RadioButton
                value="light1"
                label="Mostly potential for loss, but some concern about potential for gain "
                style={styles.radioButton}
            />
            <RadioButton
                value="light2"
                label="Mostly potential for gain, but some concern about potential for loss"
                style={styles.radioButton}
            />
            <RadioButton
                value="light3"
                label="Potential for gain"
                style={styles.radioButton}
            />
    </RadioButtonGroup>
    </div>
);

export default RadioButtons;
