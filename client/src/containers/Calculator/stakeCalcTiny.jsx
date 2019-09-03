import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

export class StakeCalcTiny extends Component {
  render() {
    const { index } = this.props;
    return (
      <MDBRow>
        <MDBCol size={6}>&nbsp;</MDBCol>
        <MDBCol size={6}>
          <div className='form-group'>
            <input
              type='text'
              id={`inputKef${index}`}
              className='form-control form-control-lg centeredInput'
            />
          </div>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default StakeCalcTiny;
