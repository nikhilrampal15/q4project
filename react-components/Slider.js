import React from 'react';
import Slider from 'material-ui/Slider';

/**
 * By default, the slider is continuous. The `step` property causes the slider to move in discrete increments.
 */


export default class SliderStep extends React.Component {

    state = {
        firstSlider: 50
    };

    handleFirstSlider(event, value) {
        this.setState({firstSlider: value});
    }

    render() {
        return (
            <div>
                <Slider
                    min={0}
                    max={100}
                    step={25}
                    defaultValue={50}
                    value={this.state.firstSlider}
                    onChange={this.handleFirstSlider.bind(this)}
                />
                <p>
                    <span>{'Your investing style can be best described as: '}</span>
                    <span>{(() => {
                        switch (this.state.firstSlider) {
                            case 25: return "Risk Adverse";
                            case 50: return "Neutral";
                            case 75: return "Some Growth";
                            case 100:return "Aggressive Growth";
                            default: return "Conservative";
                        }
                    })()}</span>

                </p>
            </div>
        );
    }
}

