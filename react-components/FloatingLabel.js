import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
    <MenuItem key={1} value={1} primaryText="5 years" />,
    <MenuItem key={2} value={2} primaryText="10 years" />,
    <MenuItem key={3} value={3} primaryText="20 years" />,
    <MenuItem key={4} value={4} primaryText="30+ years" />
];

/**
 * `SelectField` supports a floating label with the `floatingLabelText` property. This can be fixed in place with the
 * `floatingLabelFixed` property, and can be customised with the `floatingLabelText` property.
 */
export default class SelectFieldFloatingLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});

    update = () =>{
        this.props.onUpdateRetirement(this.state.value)
    };

    render() {
        return (
            <div>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    floatingLabelText="Years Until Retirement"
                    onClick={this.update}
                >
                    {items}
                </SelectField>
                <br />
            </div>
        );
    }
}

