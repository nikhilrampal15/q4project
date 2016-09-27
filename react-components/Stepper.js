import React from 'react';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import SliderStep from './Slider';
import SelectFieldFloatingLabel from './FloatingLabel';
import RadioButtons from './RadioButtons'
import GrossAnnualIncome from './GrossAnnualIncome'

/**
 * A contrived example using a transition between steps
 */

let retirement,income,investmentPersonality,investmentQuestion;
let info =[];
    
class HorizontalTransition extends React.Component {

    state = {
        loading: false,
        finished: false,
        stepIndex: 0,
        data: ''
    };

    dummyAsync = (cb) => {
        this.setState({loading: true}, () => {
            this.asyncTimer = setTimeout(cb, 500);
        });
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex + 1,
                finished: stepIndex >= 2
            }));
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex - 1
            }));
        }
    };

    onUpdate = (val) => {
        this.setState({
            data:val
        });
        income = this.state.data;
        //console.log(income)
    };
    
    onUpdateRetirement = (val) => {
      this.setState({
          data:val
      });
     retirement = this.state.data;
        //console.log(retirement)
    };

    onUpdateSlider = (val) => {
      this.setState({
          data:val
      });
      investmentPersonality = this.state.data;
        //console.log(investmentPersonality)
    };
    
    onUpdateRadio = (val) => {
        this.setState({
            data:val
        });
        investmentQuestion = this.state.data;
        //console.log(investmentQuestion)
    };
    
    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <p>
                            Please enter your personal information to better assist with finding the appropriate investment vehicle
                        </p>
                        <GrossAnnualIncome onUpdate={this.onUpdate} />
                        <br />
                        <SelectFieldFloatingLabel onUpdateRetirement={this.onUpdateRetirement}/>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <TextField style={{marginTop: 0}} floatingLabelText="YTD return at or greater than" />
                        <p>
                            Investment Personality
                        </p>
                        <SliderStep onUpdateSlider ={this.onUpdateSlider}/>
                        
                        <p>
                             If the stock market and 1 of your stocks dropped 25% over 3 months, what would you do with your shares?
                        </p>
                        
                        <RadioButtons onUpdateRadio ={this.onUpdateRadio}/>
                        
                        <p>
                            Ad group status is different than the statuses for campaigns, ads, and keywords, though the
                            statuses can affect each other. Ad groups are contained within a campaign, and each campaign can
                            have one or more ad groups. Within each ad group are ads, keywords, and bids.
                        </p>
                        
                        <p>Something something whatever cool</p>
                        
                    </div>
                );
            case 2:
                return (
                    <p>
                        Try out different ad text to see what brings in the most customers, and learn how to
                        enhance your ads using features like ad extensions. If you run into any problems with your
                        ads, find out how to tell if they're running and how to resolve approval issues.
                    </p>
                );
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    renderContent() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px', overflow: 'hidden'};

        if (finished) {
            info.push(income,retirement,investmentPersonality,investmentQuestion);
            console.log(info);
            return (
                <div style={contentStyle}>
                    <p>
                        <a
                            onClick={() => {
                           
                                this.setState({stepIndex: 0, finished: false});
                                    //console.log(income,retirement,investmentPersonality,investmentQuestion);
                    
                                    console.log(info);
                                    $.ajax({
                                        method:"POST",
                                        url:'/results',
                                        contentType:'application/json',
                                        data:JSON.stringify(info),
                                       
                        
                                        success:function(response){
                                            console.log('hello' + response)
                                            window.location = '/mychart?clusters='+response
                                        }
                                    });
                                 }}
                        >
                            Click here
                        </a> to see results
                    </p>
                </div>
            );
        }

        return (
            <div style={contentStyle}>
                <div>{this.getStepContent(stepIndex)}</div>
                <div style={{marginTop: 24, marginBottom: 12}}>
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        onTouchTap={this.handlePrev}
                        style={{marginRight: 12}}
                    />
                    <RaisedButton
                        label={stepIndex === 2 ? 'Finish' : 'Next'}
                        primary={true}
                        onTouchTap={this.handleNext}
                    />
                </div>
            </div>
        );
    }

    render() {
        const {loading, stepIndex} = this.state;

        return (
            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Personal Needs</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Investment Criteria</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Fund Advising</StepLabel>
                    </Step>
                </Stepper>
                <ExpandTransition loading={loading} open={true}>
                    {this.renderContent()}
                </ExpandTransition>
            </div>
        );
    }
}

export default HorizontalTransition;