import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
    <MenuItem key={1} value={1} primaryText="$0 to $9,275" />,
    <MenuItem key={2} value={2} primaryText="$9,275 to $37,650" />,
    <MenuItem key={3} value={3} primaryText="$37,650 to $91,150" />,
    <MenuItem key={4} value={4} primaryText="$91,150 to $190,150" />,
    <MenuItem key={5} value={5} primaryText="$190,150 to $413,350" />,
    <MenuItem key={6} value={6} primaryText="$413,350 to $415,050" />,
    <MenuItem key={7} value={7} primaryText="$415,050+" />
];

/**
 * `SelectField` supports a floating label with the `floatingLabelText` property. This can be fixed in place with the
 * `floatingLabelFixed` property, and can be customised with the `floatingLabelText` property.
 */

export default class GrossAnnualIncome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    floatingLabelText= "Gross Annual Income (USD)"
                    required
                >
                    {items}
                </SelectField>
                <br />
            </div>
        );
    }
}
