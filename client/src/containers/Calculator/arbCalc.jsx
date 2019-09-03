import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBSwitch } from 'mdbreact';
import Calc2Way from './calc2way';
import Calc3Way from './calc3way';

export class ArbCalc extends Component {
  state = {
    switch1: true
  };

  handleSwitchChange = nr => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber]
    });
  };

  render() {
    return (
      <MDBContainer className='calculator-container' fluid>
        <MDBRow>
          <MDBCol>
            <MDBSwitch
              checked={this.state.switch1}
              onChange={this.handleSwitchChange(1)}
              labelLeft={'2 исхода'}
              labelRight={'3 исхода'}
              className='calculator-switch float-right'
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size={12}>
            <div className='calcBody'>
              {!this.state.switch1 && <Calc2Way />}
              {!!this.state.switch1 && <Calc3Way />}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ArbCalc;
